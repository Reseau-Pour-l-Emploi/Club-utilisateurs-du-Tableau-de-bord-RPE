/* nav.js - shared mobile menu, toast, active link, floating Q&R */
function toggleNav(){
  var m=document.getElementById('mob-menu');
  m.style.display=m.style.display==='block'?'none':'block';
}
function showToast(msg,ok){
  var t=document.getElementById('toast');
  if(!t)return;
  t.textContent=msg;
  t.style.background=ok===false?'#b91c1c':'var(--teal)';
  t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},3200);
}
/* highlight active link */
(function(){
  var path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a,#mob-menu a').forEach(function(a){
    var h=a.getAttribute('href')||'';
    if(h===path||(path===''&&h==='index.html'))a.classList.add('active');
  });
})();
/* floating Q&R button - inject on all pages except qr.html */
(function(){
  var page=location.pathname.split('/').pop()||'index.html';
  if(page==='qr.html')return;
  var btn=document.createElement('a');
  btn.id='qr-float';
  btn.href='qr.html';
  btn.innerHTML='&#128172;<span class="qf-lbl">Questions</span>';
  btn.title='Espace Questions / Reponses';
  document.body.appendChild(btn);
})();
