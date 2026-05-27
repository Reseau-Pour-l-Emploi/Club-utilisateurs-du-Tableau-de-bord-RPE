/* ═══════════════════════════════════════════
   admin.js - RPE admin interface
   Password: Zombie78
   ═══════════════════════════════════════════ */
const ADMIN_SESS='rpe_admin';
const ADMIN_PASS='Zombie78';

function isAdmin(){return sessionStorage.getItem(ADMIN_SESS)==='1';}
function adminLogin(pw){if(pw===ADMIN_PASS){sessionStorage.setItem(ADMIN_SESS,'1');return true;}return false;}
function adminLogout(){sessionStorage.removeItem(ADMIN_SESS);location.reload();}

function injectAdminBar(){
  if(!isAdmin()||document.getElementById('adm-bar'))return;
  const bar=document.createElement('div');bar.id='adm-bar';
  bar.innerHTML=`<strong>&#128274; Mode administrateur</strong>
    <span style="opacity:.7;font-size:.75rem;">Tous les contenus sont modifiables.</span>
    <button class="btn btn-sm" onclick="adminLogout()" style="margin-left:auto;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;">Deconnexion</button>`;
  const nav=document.getElementById('nav');
  nav.parentNode.insertBefore(bar,nav.nextSibling);
}

function injectModal(){
  if(document.getElementById('adm-modal-bg'))return;
  const d=document.createElement('div');d.id='adm-modal-bg';
  d.innerHTML=`<div id="adm-modal">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.1rem;">
      <h3 id="adm-modal-title"></h3>
      <button onclick="closeAdmModal()" style="background:none;border:none;font-size:1.3rem;cursor:pointer;color:var(--muted);line-height:1;padding:0 .2rem;">&#215;</button>
    </div>
    <div id="adm-modal-body"></div>
    <div id="adm-modal-err" style="font-size:.77rem;color:#b91c1c;margin:.5rem 0;display:none;"></div>
    <div style="display:flex;gap:.6rem;margin-top:1.1rem;padding-top:1rem;border-top:1px solid var(--border);">
      <button class="btn btn-primary" id="adm-modal-save">Enregistrer</button>
      <button class="btn btn-ghost" onclick="closeAdmModal()">Annuler</button>
    </div>
  </div>`;
  document.body.appendChild(d);
  d.addEventListener('click',ev=>{if(ev.target===d)closeAdmModal();});
}
function closeAdmModal(){const b=document.getElementById('adm-modal-bg');if(b)b.classList.remove('open');}

const SCHEMAS={
  actualites:{label:'une actualite',fields:[
    {k:'date',l:'Date',t:'date',req:true,span:1},{k:'tag',l:'Etiquette',t:'text',ph:'ex : Livraison 3.2',span:1},
    {k:'tagType',l:'Couleur',t:'select',opts:[{v:'badge-teal',l:'Vert teal'},{v:'badge-navy',l:'Bleu marine'},{v:'badge-amber',l:'Ambre'},{v:'badge-orange',l:'Orange'}],span:1},
    {k:'title',l:'Titre',t:'text',req:true,span:2},{k:'desc',l:'Description',t:'textarea',span:2},
    {k:'link',l:'Lien interne',t:'text',ph:'documentation.html',span:1},
  ]},
  alertes:{label:'une alerte',fields:[
    {k:'type',l:'Type',t:'select',opts:[{v:'warn',l:'Planifiee'},{v:'info',l:'Information'},{v:'ok',l:'Resolue'}],span:1},
    {k:'title',l:'Titre',t:'text',req:true,span:2},{k:'desc',l:'Description',t:'textarea',span:2},
  ]},
  evenements:{label:'un evenement',fields:[
    {k:'fullDate',l:'Date',t:'date',req:true,span:1},{k:'title',l:'Titre',t:'text',req:true,span:2},
    {k:'type',l:'Type',t:'select',opts:[{v:'embarquement',l:'Embarquement'},{v:'evolution',l:'Evolutions'},{v:'atelier',l:'Atelier'}],span:1},
    {k:'time',l:'Heure',t:'text',ph:'10h00',span:1},{k:'duration',l:'Duree',t:'text',ph:'1h30',span:1},
    {k:'platform',l:'Plateforme',t:'text',ph:'Zoom / Teams',span:1},{k:'capacity',l:'Places / Participants',t:'text',ph:'15 places',span:1},
    {k:'desc',l:'Description',t:'textarea',span:2},
    {k:'archived',l:'Evenement archive (passe)',t:'checkbox',span:2},
    {k:'replayUrl',l:'URL replay',t:'url',ph:'https://...',span:1},{k:'supportUrl',l:'URL support (PPTX)',t:'url',ph:'https://...',span:1},
    {k:'crUrl',l:'URL compte rendu',t:'url',ph:'https://...',span:1},
  ]},
  livraisons:{label:'une livraison',fields:[
    {k:'day',l:'Jour',t:'text',ph:'14',req:true,span:1},{k:'mon',l:'Mois Annee',t:'text',ph:'Mai 25',req:true,span:1},
    {k:'title',l:'Titre',t:'text',req:true,span:2},
    {k:'badge',l:'Etiquette (optionnelle)',t:'text',ph:'Derniere livraison',span:1},
    {k:'badgeType',l:'Couleur',t:'select',opts:[{v:'',l:'Aucune'},{v:'badge-teal',l:'Vert'},{v:'badge-navy',l:'Bleu'},{v:'badge-amber',l:'Ambre'}],span:1},
    {k:'desc',l:'Description',t:'textarea',span:2},
    {k:'noteUrl',l:'URL note de livraison',t:'url',ph:'https://...',span:1},{k:'supportUrl',l:'URL support presentation',t:'url',ph:'https://...',span:1},
    {k:'replayUrl',l:'URL replay webinaire',t:'url',ph:'https://...',span:1},
  ]},
  supports:{label:'un support',fields:[
    {k:'title',l:'Titre',t:'text',req:true,span:2},{k:'desc',l:'Description courte',t:'text',ph:'ex : 42 slides - mai 2025',span:2},
    {k:'fileType',l:'Type',t:'select',opts:[{v:'PPTX',l:'PowerPoint'},{v:'PDF',l:'PDF'},{v:'XLSX',l:'Excel'},{v:'Figma',l:'Figma'},{v:'Video',l:'Video'}],span:1},
    {k:'url',l:'URL',t:'url',ph:'https://...',span:1},
  ]},
  guides:{label:'un guide',fields:[
    {k:'title',l:'Titre',t:'text',req:true,span:2},{k:'desc',l:'Description',t:'text',ph:'ex : 8 pages - PDF',span:2},
    {k:'fileType',l:'Type',t:'select',opts:[{v:'PDF',l:'PDF'},{v:'Video',l:'Video'},{v:'PPTX',l:'PowerPoint'},{v:'XLSX',l:'Excel'}],span:1},
    {k:'url',l:'URL',t:'url',ph:'https://...',span:1},
  ]},
  exercices:{label:'un exercice',fields:[
    {k:'title',l:'Titre',t:'text',req:true,span:2},{k:'desc',l:'Description',t:'text',span:2},
    {k:'level',l:'Niveau',t:'select',opts:[{v:'Debutant',l:'Debutant'},{v:'Intermediaire',l:'Intermediaire'},{v:'Avance',l:'Avance'}],span:1},
    {k:'levelClass',l:'Couleur badge',t:'select',opts:[{v:'badge-green',l:'Vert'},{v:'badge-amber',l:'Ambre'},{v:'badge-red',l:'Rouge'}],span:1},
    {k:'url',l:'URL principal',t:'url',ph:'https://...',span:1},{k:'url2',l:'URL corrige (optionnel)',t:'url',ph:'https://...',span:1},
  ]},
  glossaire:{label:'un terme',fields:[
    {k:'t',l:'Terme',t:'text',req:true,span:2},
    {k:'c',l:'Categorie',t:'select',opts:[{v:'mesure',l:'Mesure / Indicateur'},{v:'dimension',l:'Dimension / Variable'}],span:1},
    {k:'d',l:'Definition',t:'textarea',req:true,span:2},{k:'e',l:'Exemple / precision',t:'textarea',span:2},
  ]},
  ressources:{label:'une ressource',fields:[
    {k:'name',l:'Nom du site',t:'text',req:true,span:2},{k:'cat',l:'Categorie',t:'text',req:true,ph:'ex : Statistiques emploi',span:2},
    {k:'icon',l:'Icone (emoji)',t:'text',ph:'📊',span:1},{k:'desc',l:'Description',t:'textarea',span:2},
    {k:'url',l:'URL',t:'url',req:true,ph:'https://...',span:1},
  ]},
  newsletters:{label:'une newsletter',fields:[
    {k:'num',l:'Numero',t:'text',req:true,ph:'#09',span:1},{k:'period',l:'Periode',t:'text',req:true,ph:'Juin 2025',span:1},
    {k:'title',l:'Titre',t:'text',req:true,span:2},{k:'desc',l:'Description',t:'textarea',span:2},
    {k:'url',l:'URL telechargement',t:'url',ph:'https://...',span:1},
    {k:'latest',l:'Marquer comme derniere newsletter',t:'checkbox',span:2},
  ]},
};

function openAdmModal(sectionName,existingItem,onSave){
  const schema=SCHEMAS[sectionName];if(!schema)return;
  const isEdit=!!existingItem;
  document.getElementById('adm-modal-title').textContent=(isEdit?'Modifier ':'Ajouter ')+schema.label;
  const body=document.getElementById('adm-modal-body');
  body.innerHTML='<div class="adm-form-grid">'+schema.fields.map(f=>{
    const val=existingItem?existingItem[f.k]??'':'';
    const cls='adm-field'+(f.span===2?' span2':'');
    if(f.t==='checkbox')return`<div class="${cls}" style="display:flex;align-items:center;gap:.5rem;padding-top:1.2rem;">
      <input type="checkbox" data-key="${f.k}" id="ck_${f.k}" ${val?'checked':''} style="accent-color:var(--teal);width:14px;height:14px;"/>
      <label for="ck_${f.k}" style="font-size:.85rem;">${f.l}</label></div>`;
    if(f.t==='textarea')return`<div class="${cls}"><div class="adm-field"><label>${f.l}${f.req?' *':''}</label>
      <textarea data-key="${f.k}" class="fc" rows="3" placeholder="${f.ph||''}">${e(val)}</textarea></div></div>`;
    if(f.t==='select')return`<div class="${cls}"><div class="adm-field"><label>${f.l}</label>
      <select data-key="${f.k}" class="fc">${f.opts.map(o=>`<option value="${o.v}"${String(val)===String(o.v)?' selected':''}>${o.l}</option>`).join('')}</select></div></div>`;
    return`<div class="${cls}"><div class="adm-field"><label>${f.l}${f.req?' *':''}</label>
      <input type="${f.t==='url'?'url':f.t==='date'?'date':'text'}" data-key="${f.k}" class="fc" value="${e(val)}" placeholder="${f.ph||''}"/></div></div>`;
  }).join('')+'</div>';
  document.getElementById('adm-modal-err').style.display='none';
  document.getElementById('adm-modal-save').onclick=function(){
    const data={};let valid=true;
    schema.fields.forEach(f=>{
      const el=body.querySelector(`[data-key="${f.k}"]`);
      data[f.k]=f.t==='checkbox'?(el?el.checked:false):(el?el.value.trim():'');
      if(f.req&&!data[f.k])valid=false;
    });
    if(!valid){const er=document.getElementById('adm-modal-err');er.textContent='Remplissez les champs obligatoires (*).';er.style.display='block';return;}
    if(onSave){onSave(data);closeAdmModal();if(typeof _refreshPage==='function')_refreshPage();return;}
    if(isEdit)DB.update(sectionName,existingItem.id,data);
    else DB.add(sectionName,data);
    closeAdmModal();
    if(typeof _refreshPage==='function')_refreshPage();
  };
  document.getElementById('adm-modal-bg').classList.add('open');
  setTimeout(()=>body.querySelector('input,textarea,select')?.focus(),60);
}

function openLoginModal(){
  const d=document.createElement('div');d.id='login-modal-bg';
  d.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:800;display:flex;align-items:center;justify-content:center;padding:1rem;';
  d.innerHTML=`<div style="background:#fff;border-radius:10px;padding:1.6rem;width:min(360px,100%);box-shadow:0 8px 32px rgba(0,0,0,.2);">
    <h3 style="font-size:1rem;font-weight:700;color:var(--navy);margin-bottom:1rem;">Connexion administrateur</h3>
    <div style="margin-bottom:.85rem;"><label style="display:block;font-size:.72rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin-bottom:.3rem;">Mot de passe</label>
    <input type="password" id="login-pw" class="fc" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" onkeydown="if(event.key==='Enter')_doLogin()"/></div>
    <p id="login-err" style="color:#b91c1c;font-size:.78rem;margin-bottom:.75rem;display:none;">Mot de passe incorrect.</p>
    <div style="display:flex;gap:.6rem;">
      <button class="btn btn-primary" onclick="_doLogin()">Se connecter</button>
      <button class="btn btn-ghost" onclick="document.getElementById('login-modal-bg').remove()">Annuler</button>
    </div>
  </div>`;
  document.body.appendChild(d);
  setTimeout(()=>document.getElementById('login-pw').focus(),50);
}
function _doLogin(){
  const pw=document.getElementById('login-pw').value;
  if(adminLogin(pw)){document.getElementById('login-modal-bg').remove();location.reload();}
  else{document.getElementById('login-err').style.display='block';}
}

function e(s){return String(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');}

function admCtrl(sec,id){
  if(!isAdmin())return'';
  return`<div class="adm-ctrl">
    <button class="adm-btn" onclick="openAdmModal('${sec}',DB.section('${sec}').find(x=>String(x.id)==='${id}'))">&#9998; Modifier</button>
    <button class="adm-btn del" onclick="if(confirm('Supprimer cet element ?')){DB.remove('${sec}','${id}');_refreshPage();}">&#128465; Supprimer</button>
  </div>`;
}

function admAdd(sec,label){
  if(!isAdmin())return'';
  return`<button class="adm-add" onclick="openAdmModal('${sec}',null)">&#65291; Ajouter ${label}</button>`;
}

function initAdmin(){
  injectModal();
  injectAdminBar();
}
