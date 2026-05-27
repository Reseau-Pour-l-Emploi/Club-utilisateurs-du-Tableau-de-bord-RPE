/* ═══════════════════════════════════════════
   data.js - RPE shared data store
   ═══════════════════════════════════════════ */
const DB=(function(){
const KEY='rpe_db_v2';
const D={
actualites:[
  {id:1,date:'2025-05-14',tag:'Livraison 3.2',tagType:'badge-teal',title:'Module Territoire enrichi - 3 nouveaux indicateurs',desc:'Amelioration des cartographies QPV, correctifs sur les taux de sortie positive.',link:'documentation.html'},
  {id:2,date:'2025-03-28',tag:'Livraison 3.1',tagType:'badge-navy',title:'Refonte de l\'espace Formation',desc:'Nouveau perimetre CPF, suivi des cohortes alternance, comparaison inter-territoires.',link:'documentation.html'},
  {id:3,date:'2025-01-15',tag:'Feuille de route',tagType:'badge-amber',title:'Feuille de route 2025 disponible',desc:'Module RSA, exports Excel ameliores, API pour connexions systemes tiers.',link:'documentation.html'},
  {id:4,date:'2024-11-10',tag:'Livraison 3.0',tagType:'badge-navy',title:'Refonte majeure de l\'interface',desc:'Nouveau design, tableaux personnalisables, exports PDF automatises, SSO agents RPE.',link:'documentation.html'},
],
alertes:[
  {id:1,type:'warn',title:'Maintenance - 4 juin 2025, 20h-23h',desc:'Mise a jour base de donnees, deploiement v3.3. Le tableau de bord sera inaccessible pendant cette fenetre.'},
  {id:2,type:'info',title:'Lenteurs module Formation - 12 mai 2025',desc:'Temps de chargement allonges entre 14h et 16h. Surveillance en cours.'},
  {id:3,type:'ok',title:'Export PDF retabli - 4 avril 2025',desc:'Correctif definitif deploye. Certificat SSL renouvele.'},
],
evenements:[
  {id:1,fullDate:'2025-06-05',title:'Webinaire embarquement - Nouveaux utilisateurs',type:'embarquement',time:'10h00',duration:'1h30',platform:'Zoom',capacity:'',desc:'Presentation du tableau de bord, prise en main, questions des nouveaux arrivants.',archived:false,replayUrl:'',supportUrl:'',crUrl:''},
  {id:2,fullDate:'2025-06-10',title:'Webinaire - Presentation version 3.3',type:'evolution',time:'14h00',duration:'1h',platform:'Teams',capacity:'',desc:'Nouveautes v3.3 : module RSA, nouvelles cartographies, exports personnalises.',archived:false,replayUrl:'',supportUrl:'',crUrl:''},
  {id:3,fullDate:'2025-06-19',title:'Web atelier - Recueil de besoins Formation',type:'atelier',time:'9h30',duration:'2h',platform:'Zoom',capacity:'15 places',desc:'Identification des besoins sur le volet Formation avant la prochaine livraison.',archived:false,replayUrl:'',supportUrl:'',crUrl:''},
  {id:4,fullDate:'2025-07-01',title:'Webinaire embarquement - Session juillet',type:'embarquement',time:'10h00',duration:'1h30',platform:'Zoom',capacity:'',desc:'Session mensuelle d\'embarquement pour les nouveaux utilisateurs.',archived:false,replayUrl:'',supportUrl:'',crUrl:''},
  {id:5,fullDate:'2025-05-12',title:'Webinaire embarquement #12',type:'embarquement',time:'',duration:'1h28',platform:'Zoom',capacity:'23 participants',desc:'',archived:true,replayUrl:'#',supportUrl:'#',crUrl:'#'},
  {id:6,fullDate:'2025-04-08',title:'Atelier - Besoins module Territoire',type:'atelier',time:'',duration:'2h05',platform:'Zoom',capacity:'14 participants',desc:'',archived:true,replayUrl:'#',supportUrl:'#',crUrl:'#'},
  {id:7,fullDate:'2025-03-12',title:'Webinaire - Presentation version 3.1',type:'evolution',time:'',duration:'55 min',platform:'Teams',capacity:'41 participants',desc:'',archived:true,replayUrl:'#',supportUrl:'#',crUrl:'#'},
],
livraisons:[
  {id:1,day:'14',mon:'Mai 25',title:'Version 3.2 - Module Territoire enrichi',badge:'Derniere livraison',badgeType:'badge-teal',desc:'Ajout de 3 indicateurs sur les bassins d\'emploi, amelioration cartographies QPV, correctif taux de sortie positive.',noteUrl:'#',supportUrl:'#',replayUrl:''},
  {id:2,day:'28',mon:'Mar 25',title:'Version 3.1 - Espace Formation',badge:'',badgeType:'',desc:'Nouveau perimetre CPF, suivi cohortes alternance, comparaison inter-territoires.',noteUrl:'#',supportUrl:'#',replayUrl:''},
  {id:3,day:'15',mon:'Jan 25',title:'Feuille de route 2025',badge:'',badgeType:'',desc:'Module RSA, export Excel ameliore, API connexions systemes tiers. Calendrier previsionnel.',noteUrl:'#',supportUrl:'',replayUrl:''},
  {id:4,day:'10',mon:'Nov 24',title:'Version 3.0 - Refonte majeure',badge:'',badgeType:'',desc:'Nouveau design, tableaux personnalisables, exports PDF, SSO agents RPE.',noteUrl:'#',supportUrl:'#',replayUrl:'#'},
],
supports:[
  {id:1,icon:'📊',iconClass:'res-ppt',title:'Prise en main - Guide complet V3.2',desc:'Mise a jour V3.2 - 42 slides',fileType:'PPTX',url:'#'},
  {id:2,icon:'📊',iconClass:'res-ppt',title:'Presenter les resultats a un comite',desc:'Template reproductible - 18 slides',fileType:'PPTX',url:'#'},
  {id:3,icon:'📗',iconClass:'res-xls',title:'Template rapport mensuel',desc:'Fichier Excel pret a remplir',fileType:'XLSX',url:'#'},
  {id:4,icon:'🎬',iconClass:'res-vid',title:'Replay - Webinaire embarquement #12',desc:'Enregistrement - 1h24',fileType:'Video',url:'#'},
],
guides:[
  {id:1,icon:'📄',iconClass:'res-pdf',title:'Guide de demarrage rapide',desc:'Premiers pas - 6 pages - V3.2',fileType:'PDF',url:'#'},
  {id:2,icon:'📄',iconClass:'res-pdf',title:'Guide des exports et automatisation',desc:'Exports PDF & Excel - 8 pages',fileType:'PDF',url:'#'},
  {id:3,icon:'📄',iconClass:'res-pdf',title:'Fiche memo indicateurs',desc:'Reference rapide A4 - 2 pages',fileType:'PDF',url:'#'},
],
exercices:[
  {id:1,title:'Exercice 1 - Analyser un bassin d\'emploi',desc:'Cas pratique guide, avec corrige',level:'Debutant',levelClass:'badge-green',url:'#',url2:''},
  {id:2,title:'Exercice 2 - Comparer deux territoires',desc:'Analyse comparative, avec corrige',level:'Intermediaire',levelClass:'badge-amber',url:'#',url2:''},
  {id:3,title:'Exercice 3 - Produire une note territoriale',desc:'Cas complet - Excel + corrige PDF',level:'Avance',levelClass:'badge-red',url:'#',url2:'#'},
],
glossaire:[
  {id:1,t:'DEFM',c:'mesure',d:'Demandeurs d\'emploi en fin de mois. Nombre de personnes inscrites a France Travail a la fin du mois, sans emploi et tenues de rechercher activement un emploi.',e:'Categories A, B et C. Principal indicateur de suivi du marche du travail.',status:'approved'},
  {id:2,t:'Taux de chomage localise',c:'mesure',d:'Taux calcule au niveau infra-national. Produit par l\'INSEE a partir des donnees France Travail et de l\'enquete Emploi.',e:'Mis a jour trimestriellement avec un decalage de 2 trimestres.',status:'approved'},
  {id:3,t:'Taux de sortie positive',c:'mesure',d:'Part des sorties de liste correspondant a un retour a l\'emploi durable (CDI, CDD >= 6 mois) ou une entree en formation qualifiante.',e:'Calcule sur les 12 derniers mois glissants.',status:'approved'},
  {id:4,t:'Flux d\'entrees DEFM',c:'mesure',d:'Nombre de nouveaux demandeurs inscrits sur un mois : licenciements, fins de CDD, premier emploi.',e:'Flux mensuel. Distinct du stock DEFM.',status:'approved'},
  {id:5,t:'Flux de sorties DEFM',c:'mesure',d:'Nombre de demandeurs quittant la liste : reprise d\'emploi, formation, abandon de recherche, radiation.',e:'Distinguer sorties positives et autres sorties.',status:'approved'},
  {id:6,t:'Taux de tension',c:'mesure',d:'Rapport entre le nombre d\'offres deposees et le nombre de demandeurs sur un metier ou secteur.',e:'Taux > 1 = marche tendu (plus d\'offres que de candidats).',status:'approved'},
  {id:7,t:'Offres collectees',c:'mesure',d:'Nombre d\'offres d\'emploi enregistrees par France Travail sur la periode. Comprend OTM et OTPM.',e:'Indicateur de la demande de main-d\'oeuvre des entreprises.',status:'approved'},
  {id:8,t:'Part des jeunes NEET',c:'mesure',d:'Proportion des 15-29 ans ni en emploi, ni en education, ni en formation.',e:'Source : INSEE recensement + enquete Emploi.',status:'approved'},
  {id:9,t:'Beneficiaires RSA',c:'mesure',d:'Nombre de foyers ou de personnes percevant le revenu de solidarite active.',e:'Mis a jour mensuellement avec decalage M-2.',status:'approved'},
  {id:10,t:'ETP IAE',c:'mesure',d:'Equivalents temps plein dans les structures d\'insertion par l\'activite economique.',e:'Agrege par type de structure : AI, ACI, EI, ETTI.',status:'approved'},
  {id:11,t:'Contrats signes (alternance)',c:'mesure',d:'Nombre de contrats d\'apprentissage et de professionnalisation enregistres sur la periode.',e:'Source : DARES / DECA.',status:'approved'},
  {id:12,t:'Categorie de demandeur',c:'dimension',d:'Classification selon la situation par rapport a l\'emploi. A : sans emploi, B : activite reduite <= 78h/mois, C : activite reduite > 78h/mois.',e:'Base du suivi DEFM.',status:'approved'},
  {id:13,t:'CSP',c:'dimension',d:'Categorie socio-professionnelle. Regroupe les individus selon leur position dans la hierarchie professionnelle.',e:'8 groupes PCS-2020.',status:'approved'},
  {id:14,t:'Territoire',c:'dimension',d:'Niveau geographique d\'analyse : commune, EPCI, bassin d\'emploi, arrondissement, departement, region, national.',e:'Le bassin d\'emploi est la maille centrale dans le tableau de bord RPE.',status:'approved'},
  {id:15,t:'Periode',c:'dimension',d:'Granularite temporelle : mensuelle, trimestrielle, semestrielle, annuelle ou glissante sur 12 mois.',e:'Les donnees DEFM sont mensuelles. Les taux de chomage sont trimestriels.',status:'approved'},
  {id:16,t:'Secteur d\'activite',c:'dimension',d:'Classement selon la nomenclature d\'activites francaise (NAF / NACE).',e:'Permet d\'identifier les metiers en tension ou en declin.',status:'approved'},
  {id:17,t:'Niveau de qualification',c:'dimension',d:'Niveau de diplome : sans diplome, CAP/BEP, Bac, Bac+2, Bac+3/4, Bac+5 et plus.',e:'Dimension cle pour analyser les inadequations formation-emploi.',status:'approved'},
  {id:18,t:'Tranche d\'age',c:'dimension',d:'Regroupement par classe d\'age : <25 ans, 25-49 ans, 50 ans et plus.',e:'Peut etre affine selon les indicateurs.',status:'approved'},
  {id:19,t:'Anciennete au chomage',c:'dimension',d:'Duree d\'inscription continue. Courte duree < 1 an, longue duree >= 1 an.',e:'Indicateur cle pour le suivi des publics fragiles.',status:'approved'},
  {id:20,t:'Type de contrat',c:'dimension',d:'Nature du contrat : CDI, CDD, interim, apprentissage, contrat de professionnalisation, emploi aide.',e:'Disponible sur les offres et les reprises d\'emploi.',status:'approved'},
  {id:21,t:'Motif d\'inscription',c:'dimension',d:'Raison de l\'inscription : licenciement economique, fin de CDD, demission, premier emploi, reprise d\'activite, autre.',e:'Disponible dans les flux d\'entrees DEFM.',status:'approved'},
  {id:22,t:'QPV',c:'dimension',d:'Quartier prioritaire de la politique de la ville. Perimetre geographique cible pour les politiques de cohesion sociale.',e:'Indicateurs calcules a l\'iris, agreges au QPV.',status:'approved'},
],
ressources:[
  {id:1,cat:'Statistiques emploi et marche du travail',icon:'📊',name:'INSEE - Statistiques locales',desc:'Donnees socio-economiques et demographiques par commune, EPCI et departement.',url:'https://statistiques-locales.insee.fr'},
  {id:2,cat:'Statistiques emploi et marche du travail',icon:'📈',name:'DARES - Publications emploi',desc:'Donnees sur les demandeurs d\'emploi, les offres, les contrats.',url:'https://dares.travail-emploi.gouv.fr'},
  {id:3,cat:'Statistiques emploi et marche du travail',icon:'🗺️',name:'France Travail - Statistiques',desc:'Donnees sur le marche du travail, demandeurs d\'emploi et offres collectees.',url:'https://statistiques.francetravail.org'},
  {id:4,cat:'Territoires et cohesion sociale',icon:'🏙️',name:'ANCT - Cohesion des territoires',desc:'Donnees sur les territoires fragiles, QPV, zones de revitalisation rurale.',url:'https://agence-cohesion-territoires.gouv.fr'},
  {id:5,cat:'Territoires et cohesion sociale',icon:'🌐',name:'Data.gouv.fr',desc:'Plateforme ouverte des donnees publiques francaises.',url:'https://data.gouv.fr'},
  {id:6,cat:'Formation professionnelle',icon:'📚',name:'CARIF-OREF Inter-regions',desc:'Formation professionnelle, certifications, besoins des branches.',url:'https://intercariforef.org'},
],
newsletters:[
  {id:1,num:'#08',period:'Mai 2025',title:'V3.2 en production, atelier Formation a venir',desc:'Retour sur les nouveautes et annonce des prochains evenements.',url:'#',latest:true},
  {id:2,num:'#07',period:'Avril 2025',title:'Incident resolu, enquete satisfaction ouverte',desc:'Point sur l\'incident export PDF et bilan de l\'atelier Territoire.',url:'#',latest:false},
  {id:3,num:'#06',period:'Mars 2025',title:'V3.1 - Formation et alternance enrichis',desc:'Presentation de la nouvelle livraison et ressources disponibles.',url:'#',latest:false},
  {id:4,num:'#05',period:'Fevrier 2025',title:'Feuille de route 2025 presentee en webinaire',desc:'Synthese des orientations retenues et calendrier previsionnel.',url:'#',latest:false},
  {id:5,num:'#04',period:'Janvier 2025',title:'Bilan 2024 et perspectives',desc:'Retour sur une annee de deploiement, chiffres cles, temoignages.',url:'#',latest:false},
  {id:6,num:'#03',period:'Novembre 2024',title:'V3.0 - Refonte majeure deployee',desc:'Decouverte du nouveau design et des fonctionnalites de personnalisation.',url:'#',latest:false},
  {id:7,num:'#02',period:'Septembre 2024',title:'Retour sur les ateliers de l\'ete',desc:'Besoins exprimes et priorisation pour la roadmap.',url:'#',latest:false},
  {id:8,num:'#01',period:'Juin 2024',title:'Lancement du club utilisateurs',desc:'Presentation de l\'initiative, premiers membres et objectifs.',url:'#',latest:false},
],
};
function raw(){try{const s=localStorage.getItem(KEY);return s?JSON.parse(s):null;}catch(e){return null;}}
function init(){if(!raw())localStorage.setItem(KEY,JSON.stringify(JSON.parse(JSON.stringify(D))));}
function section(n){const d=raw();return(d&&d[n]!==undefined?d[n]:D[n])||[];}
function _save(d){localStorage.setItem(KEY,JSON.stringify(d));}
function add(n,item){const d=raw()||JSON.parse(JSON.stringify(D));item.id=Date.now();d[n]=[item,...(d[n]||[])];_save(d);return item;}
function update(n,id,patch){const d=raw()||JSON.parse(JSON.stringify(D));const a=d[n]||[];const i=a.findIndex(x=>String(x.id)===String(id));if(i>=0)a[i]=Object.assign({},a[i],patch);d[n]=a;_save(d);}
function remove(n,id){const d=raw()||JSON.parse(JSON.stringify(D));d[n]=(d[n]||[]).filter(x=>String(x.id)!==String(id));_save(d);}
function reset(){localStorage.removeItem(KEY);}
return{init,section,add,update,remove,reset};
})();

/* ═══════════════════════════════════════════
   Glossaire proposals (contributions wiki)
   ═══════════════════════════════════════════ */
const GLOS_PROP=(function(){
const KEY='rpe_glos_proposals_v1';
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'[]');}catch(e){return[];}}
function save(d){localStorage.setItem(KEY,JSON.stringify(d));}
function add(p){const d=load();p.id=Date.now();p.date=new Date().toISOString().slice(0,10);p.status='pending';d.unshift(p);save(d);}
function approve(id,patch){const d=load();const i=d.findIndex(x=>x.id===id);if(i>=0){Object.assign(d[i],patch||{});d[i].status='approved';}save(d);}
function reject(id){const d=load();const i=d.findIndex(x=>x.id===id);if(i>=0)d[i].status='rejected';save(d);}
function remove(id){save(load().filter(x=>x.id!==id));}
function pending(){return load().filter(x=>x.status==='pending');}
function all(){return load();}
return{add,approve,reject,remove,pending,all};
})();
