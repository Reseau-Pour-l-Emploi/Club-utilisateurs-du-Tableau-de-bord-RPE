/* nav.js - shared mobile menu + toast */
function toggleNav(){
  var m=document.getElementById('mob-menu');
  m.style.display=m.style.display==='block'?'none':'block';
}
function showToast(msg,ok){
  var t=document.getElementById('toast');
  t.textContent=msg;
  t.style.background=ok===false?'#b91c1c':'var(--teal)';
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}
/* highlight active nav link */
(function(){
  var path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a, #mob-menu a').forEach(a=>{
    var h=a.getAttribute('href')||'';
    if(h===path||(path===''&&h==='index.html'))a.classList.add('active');
  });
})();
