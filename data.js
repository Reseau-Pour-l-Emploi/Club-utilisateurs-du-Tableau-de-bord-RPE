/* ═══════════════════════════════════════════════
   data.js — RPE shared data store (localStorage)
   ═══════════════════════════════════════════════ */
const DB=(function(){
const KEY='rpe_db_v2';
const D={
actualites:[
  {id:1,date:'2025-05-14',tag:'Livraison 3.2',tagType:'badge-teal',title:'Module Territoire enrichi — 3 nouveaux indicateurs',desc:'Amélioration des cartographies QPV, correctifs sur les taux de sortie positive.',link:'documentation.html'},
  {id:2,date:'2025-03-28',tag:'Livraison 3.1',tagType:'badge-navy',title:'Refonte de l\'espace Formation',desc:'Nouveau périmètre CPF, suivi des cohortes alternance, comparaison inter-territoires.',link:'documentation.html'},
  {id:3,date:'2025-01-15',tag:'Feuille de route',tagType:'badge-amber',title:'Feuille de route 2025 disponible',desc:'Module RSA, exports Excel améliorés, API pour connexions systèmes tiers.',link:'documentation.html'},
  {id:4,date:'2024-11-10',tag:'Livraison 3.0',tagType:'badge-navy',title:'Refonte majeure de l\'interface',desc:'Nouveau design, tableaux personnalisables, exports PDF automatisés, SSO agents RPE.',link:'documentation.html'},
],
alertes:[
  {id:1,type:'warn',title:'Maintenance — 4 juin 2025, 20h–23h',desc:'Mise à jour base de données, déploiement v3.3. Le tableau de bord sera inaccessible pendant cette fenêtre.'},
  {id:2,type:'info',title:'Lenteurs module Formation — 12 mai 2025',desc:'Temps de chargement allongés entre 14h et 16h. Surveillance en cours.'},
  {id:3,type:'ok',title:'Export PDF rétabli — 4 avril 2025',desc:'Correctif définitif déployé. Certificat SSL renouvelé.'},
],
evenements:[
  {id:1,fullDate:'2025-06-05',title:'Webinaire embarquement — Nouveaux utilisateurs',type:'embarquement',time:'10h00',duration:'1h30',platform:'Zoom',capacity:'',desc:'Présentation du tableau de bord, prise en main, questions des nouveaux arrivants.',archived:false,replayUrl:'',supportUrl:'',crUrl:''},
  {id:2,fullDate:'2025-06-10',title:'Webinaire — Présentation version 3.3',type:'evolution',time:'14h00',duration:'1h',platform:'Teams',capacity:'',desc:'Nouveautés v3.3 : module RSA, nouvelles cartographies, exports personnalisés.',archived:false,replayUrl:'',supportUrl:'',crUrl:''},
  {id:3,fullDate:'2025-06-19',title:'Web atelier — Recueil de besoins Formation',type:'atelier',time:'9h30',duration:'2h',platform:'Zoom',capacity:'15 places',desc:'Identification des besoins sur le volet Formation avant la prochaine livraison.',archived:false,replayUrl:'',supportUrl:'',crUrl:''},
  {id:4,fullDate:'2025-07-01',title:'Webinaire embarquement — Session juillet',type:'embarquement',time:'10h00',duration:'1h30',platform:'Zoom',capacity:'',desc:'Session mensuelle d\'embarquement pour les nouveaux utilisateurs.',archived:false,replayUrl:'',supportUrl:'',crUrl:''},
  {id:5,fullDate:'2025-05-12',title:'Webinaire embarquement #12',type:'embarquement',time:'',duration:'1h28',platform:'Zoom',capacity:'23 participants',desc:'',archived:true,replayUrl:'#',supportUrl:'#',crUrl:'#'},
  {id:6,fullDate:'2025-04-08',title:'Atelier — Besoins module Territoire',type:'atelier',time:'',duration:'2h05',platform:'Zoom',capacity:'14 participants',desc:'',archived:true,replayUrl:'#',supportUrl:'#',crUrl:'#'},
  {id:7,fullDate:'2025-03-12',title:'Webinaire — Présentation version 3.1',type:'evolution',time:'',duration:'55 min',platform:'Teams',capacity:'41 participants',desc:'',archived:true,replayUrl:'#',supportUrl:'#',crUrl:'#'},
],
livraisons:[
  {id:1,day:'14',mon:'Mai 25',title:'Version 3.2 — Module Territoire enrichi',badge:'Dernière livraison',badgeType:'badge-teal',desc:'Ajout de 3 indicateurs sur les bassins d\'emploi, amélioration cartographies QPV, correctif taux de sortie positive.',noteUrl:'#',supportUrl:'#',replayUrl:''},
  {id:2,day:'28',mon:'Mar 25',title:'Version 3.1 — Espace Formation',badge:'',badgeType:'',desc:'Nouveau périmètre CPF, suivi cohortes alternance, comparaison inter-territoires.',noteUrl:'#',supportUrl:'#',replayUrl:''},
  {id:3,day:'15',mon:'Jan 25',title:'Feuille de route 2025',badge:'',badgeType:'',desc:'Module RSA, export Excel amélioré, API connexions systèmes tiers. Calendrier prévisionnel.',noteUrl:'#',supportUrl:'',replayUrl:''},
  {id:4,day:'10',mon:'Nov 24',title:'Version 3.0 — Refonte majeure',badge:'',badgeType:'',desc:'Nouveau design, tableaux personnalisables, exports PDF, SSO agents RPE.',noteUrl:'#',supportUrl:'#',replayUrl:'#'},
],
supports:[
  {id:1,icon:'📊',iconClass:'res-ppt',title:'Prise en main — Guide complet V3.2',desc:'Mise à jour V3.2 · 42 slides',fileType:'PPTX',url:'#'},
  {id:2,icon:'📊',iconClass:'res-ppt',title:'Présenter les résultats à un comité',desc:'Template reproductible · 18 slides',fileType:'PPTX',url:'#'},
  {id:3,icon:'📗',iconClass:'res-xls',title:'Template rapport mensuel',desc:'Fichier Excel prêt à remplir',fileType:'XLSX',url:'#'},
  {id:4,icon:'🎬',iconClass:'res-vid',title:'Replay — Webinaire embarquement #12',desc:'Enregistrement · 1h24',fileType:'Vidéo',url:'#'},
],
guides:[
  {id:1,icon:'📄',iconClass:'res-pdf',title:'Guide de démarrage rapide',desc:'Premiers pas · 6 pages · V3.2',fileType:'PDF',url:'#'},
  {id:2,icon:'📄',iconClass:'res-pdf',title:'Guide des exports et automatisation',desc:'Exports PDF & Excel · 8 pages',fileType:'PDF',url:'#'},
  {id:3,icon:'📄',iconClass:'res-pdf',title:'Fiche mémo indicateurs',desc:'Référence rapide A4 · 2 pages',fileType:'PDF',url:'#'},
],
exercices:[
  {id:1,title:'Exercice 1 — Analyser un bassin d\'emploi',desc:'Cas pratique guidé, avec corrigé',level:'Débutant',levelClass:'badge-green',url:'#',url2:''},
  {id:2,title:'Exercice 2 — Comparer deux territoires',desc:'Analyse comparative, avec corrigé',level:'Intermédiaire',levelClass:'badge-amber',url:'#',url2:''},
  {id:3,title:'Exercice 3 — Produire une note territoriale',desc:'Cas complet · Excel + corrigé PDF',level:'Avancé',levelClass:'badge-red',url:'#',url2:'#'},
],
glossaire:[
  {id:1,t:'DEFM',c:'mesure',d:'Demandeurs d\'emploi en fin de mois. Nombre de personnes inscrites à France Travail à la fin du mois, sans emploi et tenues de rechercher activement un emploi.',e:'Catégories A, B et C. Principal indicateur de suivi du marché du travail.'},
  {id:2,t:'Taux de chômage localisé',c:'mesure',d:'Taux calculé au niveau infra-national. Produit par l\'INSEE à partir des données France Travail et de l\'enquête Emploi.',e:'Mis à jour trimestriellement avec un décalage de 2 trimestres.'},
  {id:3,t:'Taux de sortie positive',c:'mesure',d:'Part des sorties de liste correspondant à un retour à l\'emploi durable (CDI, CDD ≥ 6 mois) ou une entrée en formation qualifiante.',e:'Calculé sur les 12 derniers mois glissants.'},
  {id:4,t:'Flux d\'entrées DEFM',c:'mesure',d:'Nombre de nouveaux demandeurs inscrits sur un mois : licenciements, fins de CDD, premier emploi.',e:'Flux mensuel. Distinct du stock DEFM.'},
  {id:5,t:'Flux de sorties DEFM',c:'mesure',d:'Nombre de demandeurs quittant la liste : reprise d\'emploi, formation, abandon de recherche, radiation.',e:'Distinguer sorties positives et autres sorties.'},
  {id:6,t:'Taux de tension',c:'mesure',d:'Rapport entre le nombre d\'offres déposées et le nombre de demandeurs sur un métier ou secteur.',e:'Taux > 1 = marché tendu (plus d\'offres que de candidats).'},
  {id:7,t:'Offres collectées',c:'mesure',d:'Nombre d\'offres d\'emploi enregistrées par France Travail sur la période. Comprend OTM et OTPM.',e:'Indicateur de la demande de main-d\'œuvre des entreprises.'},
  {id:8,t:'Part des jeunes NEET',c:'mesure',d:'Proportion des 15-29 ans ni en emploi, ni en éducation, ni en formation.',e:'Source : INSEE recensement + enquête Emploi.'},
  {id:9,t:'Bénéficiaires RSA',c:'mesure',d:'Nombre de foyers ou de personnes percevant le revenu de solidarité active.',e:'Mis à jour mensuellement avec décalage M-2.'},
  {id:10,t:'ETP IAE',c:'mesure',d:'Équivalents temps plein dans les structures d\'insertion par l\'activité économique.',e:'Agrégé par type de structure : AI, ACI, EI, ETTI.'},
  {id:11,t:'Contrats signés (alternance)',c:'mesure',d:'Nombre de contrats d\'apprentissage et de professionnalisation enregistrés sur la période.',e:'Source : DARES / DECA.'},
  {id:12,t:'Catégorie de demandeur',c:'dimension',d:'Classification selon la situation par rapport à l\'emploi. A : sans emploi, B : activité réduite ≤ 78h/mois, C : activité réduite > 78h/mois.',e:'Base du suivi DEFM.'},
  {id:13,t:'CSP',c:'dimension',d:'Catégorie socio-professionnelle. Regroupe les individus selon leur position dans la hiérarchie professionnelle.',e:'8 groupes PCS-2020.'},
  {id:14,t:'Territoire',c:'dimension',d:'Niveau géographique d\'analyse : commune, EPCI, bassin d\'emploi, arrondissement, département, région, national.',e:'Le bassin d\'emploi est la maille centrale dans le tableau de bord RPE.'},
  {id:15,t:'Période',c:'dimension',d:'Granularité temporelle : mensuelle, trimestrielle, semestrielle, annuelle ou glissante sur 12 mois.',e:'Les données DEFM sont mensuelles. Les taux de chômage sont trimestriels.'},
  {id:16,t:'Secteur d\'activité',c:'dimension',d:'Classement selon la nomenclature d\'activités française (NAF / NACE).',e:'Permet d\'identifier les métiers en tension ou en déclin.'},
  {id:17,t:'Niveau de qualification',c:'dimension',d:'Niveau de diplôme : sans diplôme, CAP/BEP, Bac, Bac+2, Bac+3/4, Bac+5 et plus.',e:'Dimension clé pour analyser les inadéquations formation-emploi.'},
  {id:18,t:'Tranche d\'âge',c:'dimension',d:'Regroupement par classe d\'âge : <25 ans, 25-49 ans, 50 ans et plus.',e:'Peut être affinée selon les indicateurs.'},
  {id:19,t:'Ancienneté au chômage',c:'dimension',d:'Durée d\'inscription continue. Courte durée < 1 an, longue durée ≥ 1 an.',e:'Indicateur clé pour le suivi des publics fragiles.'},
  {id:20,t:'Type de contrat',c:'dimension',d:'Nature du contrat : CDI, CDD, intérim, apprentissage, contrat de professionnalisation, emploi aidé.',e:'Disponible sur les offres et les reprises d\'emploi.'},
  {id:21,t:'Motif d\'inscription',c:'dimension',d:'Raison de l\'inscription : licenciement économique, fin de CDD, démission, premier emploi, reprise d\'activité, autre.',e:'Disponible dans les flux d\'entrées DEFM.'},
  {id:22,t:'QPV',c:'dimension',d:'Quartier prioritaire de la politique de la ville. Périmètre géographique ciblé pour les politiques de cohésion sociale.',e:'Indicateurs calculés à l\'iris, agrégés au QPV.'},
],
ressources:[
  {id:1,cat:'Statistiques emploi & marché du travail',icon:'📊',name:'INSEE — Statistiques locales',desc:'Données socio-économiques et démographiques par commune, EPCI et département.',url:'https://statistiques-locales.insee.fr'},
  {id:2,cat:'Statistiques emploi & marché du travail',icon:'📈',name:'DARES — Publications emploi',desc:'Données sur les demandeurs d\'emploi, les offres, les contrats.',url:'https://dares.travail-emploi.gouv.fr'},
  {id:3,cat:'Statistiques emploi & marché du travail',icon:'🗺️',name:'France Travail — Statistiques',desc:'Données sur le marché du travail, demandeurs d\'emploi et offres collectées.',url:'https://statistiques.francetravail.org'},
  {id:4,cat:'Territoires & cohésion sociale',icon:'🏙️',name:'ANCT — Cohésion des territoires',desc:'Données sur les territoires fragiles, QPV, zones de revitalisation rurale.',url:'https://agence-cohesion-territoires.gouv.fr'},
  {id:5,cat:'Territoires & cohésion sociale',icon:'🌐',name:'Data.gouv.fr',desc:'Plateforme ouverte des données publiques françaises.',url:'https://data.gouv.fr'},
  {id:6,cat:'Formation professionnelle',icon:'📚',name:'CARIF-OREF Inter-régions',desc:'Formation professionnelle, certifications, besoins des branches.',url:'https://intercariforef.org'},
],
newsletters:[
  {id:1,num:'#08',period:'Mai 2025',title:'V3.2 en production, atelier Formation à venir',desc:'Retour sur les nouveautés et annonce des prochains événements.',url:'#',latest:true},
  {id:2,num:'#07',period:'Avril 2025',title:'Incident résolu, enquête satisfaction ouverte',desc:'Point sur l\'incident export PDF et bilan de l\'atelier Territoire.',url:'#',latest:false},
  {id:3,num:'#06',period:'Mars 2025',title:'V3.1 — Formation et alternance enrichis',desc:'Présentation de la nouvelle livraison et ressources disponibles.',url:'#',latest:false},
  {id:4,num:'#05',period:'Février 2025',title:'Feuille de route 2025 présentée en webinaire',desc:'Synthèse des orientations retenues et calendrier prévisionnel.',url:'#',latest:false},
  {id:5,num:'#04',period:'Janvier 2025',title:'Bilan 2024 et perspectives',desc:'Retour sur une année de déploiement, chiffres clés, témoignages.',url:'#',latest:false},
  {id:6,num:'#03',period:'Novembre 2024',title:'V3.0 — Refonte majeure déployée',desc:'Découverte du nouveau design et des fonctionnalités de personnalisation.',url:'#',latest:false},
  {id:7,num:'#02',period:'Septembre 2024',title:'Retour sur les ateliers de l\'été',desc:'Besoins exprimés et priorisation pour la roadmap.',url:'#',latest:false},
  {id:8,num:'#01',period:'Juin 2024',title:'Lancement du club utilisateurs',desc:'Présentation de l\'initiative, premiers membres et objectifs.',url:'#',latest:false},
]
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
