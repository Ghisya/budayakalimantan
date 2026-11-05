const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
// Menu HP
const nav=$('#nav');
$('#burger').onclick=()=>nav.classList.toggle('open');
$$('#nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
// Progress bar & nav aktif
addEventListener('scroll',()=>{
  const h=document.documentElement;
  $('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
});
const links=$$('#nav a');
const spy=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id));
}),{threshold:.4});
$$('section[id]').forEach(s=>spy.observe(s));
// Efek muncul + hitung angka
const rv=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add('show');
  $$('[data-n]',e.target).forEach(n=>{let c=0,t=+n.dataset.n;const i=setInterval(()=>{n.textContent=++c;if(c>=t)clearInterval(i)},300)});
  rv.unobserve(e.target);
}),{threshold:.15});
$$('.reveal').forEach(r=>rv.observe(r));
// Teks mengetik
const ty=$('#typed'),tx=ty.dataset.text;let k=0;
(function t(){ty.textContent=tx.slice(0,k++);if(k<=tx.length)setTimeout(t,22)})();
// Rumah Betang interaktif
const modal=$('#modal');
$$('.roof,.hot,.stilts').forEach(el=>el.onclick=()=>{
  $('#mt').textContent=el.dataset.title;$('#mp').textContent=el.dataset.text;modal.classList.add('open');
  $('#info').innerHTML='<h3>'+el.dataset.title+'</h3><p>'+el.dataset.text+'</p>';
});
$('#close').onclick=()=>modal.classList.remove('open');
modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
// Tab busana
$$('[data-tab]').forEach(b=>b.onclick=()=>{
  $$('[data-tab]').forEach(x=>x.classList.toggle('active',x===b));
  $$('.tab-panel').forEach(p=>p.classList.toggle('active',p.id===b.dataset.tab));
});
// Filter & balik kartu makanan
$$('[data-f]').forEach(b=>b.onclick=()=>{
  $$('[data-f]').forEach(x=>x.classList.toggle('active',x===b));
  $$('.flip').forEach(f=>f.style.display=(b.dataset.f==='all'||f.dataset.s===b.dataset.f)?'':'none');
});
$$('.flip').forEach(f=>f.onclick=()=>f.classList.toggle('on'));

// Galeri foto rumah (ganti otomatis + bisa diketuk)
const hpBtns=$$('.hp-thumbs button'),hpImg=$('#hpimg');let hpI=0,hpT;
function hpShow(i){
  hpI=i;const b=hpBtns[i];
  hpBtns.forEach(x=>x.classList.toggle('on',x===b));
  hpImg.classList.add('out');
  setTimeout(()=>{hpImg.src='../images/'+b.dataset.src;hpImg.alt=b.dataset.t;$('#hpt').textContent=b.dataset.t;$('#hpd').textContent=b.dataset.d;hpImg.classList.remove('out')},300);
}
function hpAuto(){clearInterval(hpT);hpT=setInterval(()=>hpShow((hpI+1)%hpBtns.length),6000)}
hpBtns.forEach((b,i)=>b.onclick=()=>{hpShow(i);hpAuto()});
hpAuto();

// Busana: ketuk hiasan untuk membaca maknanya
$$('.busana-txt').forEach(r=>{
  const bs=$$('.mk',r),box=$('.mk-info',r);
  const pick=b=>{bs.forEach(x=>x.classList.toggle('on',x===b));box.innerHTML='<b>'+b.textContent+':</b> '+b.dataset.t};
  bs.forEach(b=>b.onclick=()=>pick(b));pick(bs[0]);
});

// Busana: foto bergeser lembut mengikuti kursor + isi makna bergerak saat berganti
$$('.b-row').forEach(r=>{
  const im=$('.bphoto img',r);
  r.addEventListener('mousemove',e=>{
    const b=r.getBoundingClientRect();
    im.style.setProperty('--px',((e.clientX-b.left)/b.width-.5)*-22+'px');
    im.style.setProperty('--py',((e.clientY-b.top)/b.height-.5)*-16+'px');
  });
  r.addEventListener('mouseleave',()=>{im.style.setProperty('--px','0px');im.style.setProperty('--py','0px')});
  $$('.mk',r).forEach(b=>b.addEventListener('click',()=>{const m=$('.mk-info',r);m.classList.remove('swap');void m.offsetWidth;m.classList.add('swap')}));
});
