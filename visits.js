/* ═══════════════════════════════════════════
   visits.js - visit counter + geo tracking
   ═══════════════════════════════════════════ */
const VISITS=(function(){
const KEY='rpe_visits_v1';
const GEO_KEY='rpe_geo_sess';

/* seed 180 days of sample data on first load */
function seed(){
  if(localStorage.getItem(KEY))return;
  const locs=[
    {city:'Paris',region:'Ile-de-France',country:'France'},
    {city:'Lyon',region:'Auvergne-Rhone-Alpes',country:'France'},
    {city:'Marseille',region:'Provence-Alpes-Cote d\'Azur',country:'France'},
    {city:'Bordeaux',region:'Nouvelle-Aquitaine',country:'France'},
    {city:'Toulouse',region:'Occitanie',country:'France'},
    {city:'Nantes',region:'Pays de la Loire',country:'France'},
    {city:'Strasbourg',region:'Grand Est',country:'France'},
    {city:'Rennes',region:'Bretagne',country:'France'},
    {city:'Lille',region:'Hauts-de-France',country:'France'},
  ];
  const pages=['index.html','documentation.html','agenda.html','qr.html','ressources.html','newsletter.html'];
  const visits=[];
  const now=Date.now();
  for(let d=179;d>=1;d--){
    const base=new Date(now-d*86400000);
    const dow=base.getDay();
    const isWE=dow===0||dow===6;
    const nv=isWE?Math.floor(Math.random()*4):Math.floor(Math.random()*18)+3;
    for(let v=0;v<nv;v++){
      const loc=locs[Math.floor(Math.random()*locs.length)];
      visits.push({
        ts:base.getTime()+Math.random()*86400000,
        date:base.toISOString().slice(0,10),
        page:pages[Math.floor(Math.random()*pages.length)],
        city:loc.city,region:loc.region,country:loc.country
      });
    }
  }
  localStorage.setItem(KEY,JSON.stringify(visits));
}

function load(){try{return JSON.parse(localStorage.getItem(KEY)||'[]');}catch(e){return[];}}
function save(d){localStorage.setItem(KEY,JSON.stringify(d));}

async function record(){
  const today=new Date().toISOString().slice(0,10);
  const page=location.pathname.split('/').pop()||'index.html';
  let geo=null;
  try{
    const cached=sessionStorage.getItem(GEO_KEY);
    if(cached){geo=JSON.parse(cached);}
    else{
      const r=await fetch('https://ipapi.co/json/',{signal:AbortSignal.timeout(3000)});
      if(r.ok){const j=await r.json();geo={city:j.city||'?',region:j.region||'?',country:j.country_name||'France'};sessionStorage.setItem(GEO_KEY,JSON.stringify(geo));}
    }
  }catch(e){geo={city:'?',region:'?',country:'France'};}
  const visits=load();
  visits.push({ts:Date.now(),date:today,page,city:geo?.city||'?',region:geo?.region||'?',country:geo?.country||'France'});
  if(visits.length>2000)visits.splice(0,visits.length-2000);
  save(visits);
}

function todayCount(){
  const today=new Date().toISOString().slice(0,10);
  return load().filter(v=>v.date===today).length;
}

function weekCount(){
  const d=new Date();d.setDate(d.getDate()-7);
  const wk=d.toISOString().slice(0,10);
  return load().filter(v=>v.date>=wk).length;
}

function monthCount(){
  const ym=new Date().toISOString().slice(0,7);
  return load().filter(v=>v.date.startsWith(ym)).length;
}

function yearCount(){
  const yr=new Date().getFullYear().toString();
  return load().filter(v=>v.date.startsWith(yr)).length;
}

function byDay(n){
  const res={};
  const now=Date.now();
  for(let i=n-1;i>=0;i--){
    const d=new Date(now-i*86400000).toISOString().slice(0,10);
    res[d]=0;
  }
  load().forEach(v=>{if(res[v.date]!==undefined)res[v.date]++;});
  return res;
}

function byWeek(n){
  const res={};
  const now=new Date();
  for(let i=n-1;i>=0;i--){
    const d=new Date(now);d.setDate(d.getDate()-i*7);
    const yr=d.getFullYear();const wk=getISOWeek(d);
    const lbl=`${yr}-S${String(wk).padStart(2,'0')}`;
    res[lbl]=0;
  }
  load().forEach(v=>{
    const d=new Date(v.date+'T12:00:00');
    const yr=d.getFullYear();const wk=getISOWeek(d);
    const lbl=`${yr}-S${String(wk).padStart(2,'0')}`;
    if(res[lbl]!==undefined)res[lbl]++;
  });
  return res;
}

function byMonth(n){
  const res={};
  const now=new Date();
  for(let i=n-1;i>=0;i--){
    const d=new Date(now.getFullYear(),now.getMonth()-i,1);
    const lbl=d.toLocaleDateString('fr-FR',{month:'short',year:'2-digit'});
    const key=d.toISOString().slice(0,7);
    res[key]={lbl,count:0};
  }
  load().forEach(v=>{const ym=v.date.slice(0,7);if(res[ym])res[ym].count++;});
  return res;
}

function byCity(top){
  const cnt={};
  load().forEach(v=>{const k=(v.city||'?')+' ('+v.region+')';cnt[k]=(cnt[k]||0)+1;});
  return Object.entries(cnt).sort((a,b)=>b[1]-a[1]).slice(0,top||10);
}

function byPage(){
  const cnt={};
  load().forEach(v=>{cnt[v.page]=(cnt[v.page]||0)+1;});
  return Object.entries(cnt).sort((a,b)=>b[1]-a[1]);
}

function getISOWeek(d){
  const t=new Date(d);t.setHours(0,0,0,0);t.setDate(t.getDate()+3-(t.getDay()+6)%7);
  const w=new Date(t.getFullYear(),0,4);
  return 1+Math.round(((t-w)/86400000-3+(w.getDay()+6)%7)/7);
}

return{seed,record,todayCount,weekCount,monthCount,yearCount,byDay,byWeek,byMonth,byCity,byPage};
})();
