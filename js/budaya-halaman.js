const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
// Menu HP, progres scroll, tombol ke atas
$('#burger').onclick=()=>$('#nav').classList.toggle('open');
const topBtn=$('#top');
addEventListener('scroll',()=>{
  const h=document.documentElement;
  $('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
  topBtn.classList.toggle('show',h.scrollTop>600);
});
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});

const fallbackImage="data:image/svg+xml,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><defs><pattern id='p' width='60' height='60' patternUnits='userSpaceOnUse'><path d='M30 4L56 30L30 56L4 30Z' fill='none' stroke='#D4AF37' stroke-opacity='.45'/><circle cx='30' cy='30' r='4' fill='#D4AF37' fill-opacity='.5'/></pattern></defs><rect width='800' height='500' fill='#5A1010'/><rect width='800' height='500' fill='url(#p)'/></svg>");

// Foto lokal dulu (nama file = judul budaya), lalu foto internet, lalu motif cadangan
const slug=t=>t.toLowerCase().replace(/&/g,' ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function srcList(it){
  const web=/^https?:/.test(it.img||''),base='../images/'+slug(it.title);
  return [...(it.img&&!web?[it.img]:[]),...['.jpg','.png','.jpeg','.webp'].map(e=>base+e),...(web?[it.img]:[]),fallbackImage];
}
function setImg(im,it){const L=srcList(it);let i=0;im.onerror=()=>{if(++i<L.length)im.src=L[i]};im.src=L[0]}
const grid=$('#cultureGrid'),info=$('#showingInfo'),input=$('#searchInput'),tabs=$$('.tab-btn'),chip=$('#chip');

if(typeof cultureData==='undefined'||!cultureData.length){
  grid.innerHTML='<div class="empty-result"><h3>Data budaya belum terpasang</h3><p>Tempel isi daftar budaya ke file js/data-budaya.js, lalu muat ulang halaman.</p></div>';
}else{
  if(typeof prepareData==='function')prepareData(cultureData);
  const render=(cat='all',key='')=>{
    grid.innerHTML='';
    const list=cultureData.filter(i=>(cat==='all'||i.category===cat)&&(i.title+' '+i.origin+' '+i.shortDesc+' '+i.fullDesc).toLowerCase().includes(key.toLowerCase()));
    info.textContent=`Menampilkan ${list.length} dari ${cultureData.length} warisan budaya Kalimantan`;
    if(!list.length){grid.innerHTML='<div class="empty-result"><h3>Budaya tidak ditemukan 🔍</h3><p>Coba kata kunci lain atau pilih kategori "Semua".</p></div>';return}
    list.forEach((it,n)=>{
      const c=document.createElement('div');c.className='culture-card';c.style.animationDelay=n*.05+'s';
      c.innerHTML=`<div class="card-img-wrap"><span class="category-tag">${it.categoryLabel}</span><img alt="${it.title}" loading="lazy"></div><div class="card-info"><small>📍 ${it.origin}</small><h3>${it.title}</h3><p>${it.shortDesc}</p><span class="btn-detail">Baca makna &rarr;</span></div>`;
      setImg($('img',c),it);
      c.onclick=()=>openModal(it);grid.appendChild(c);
    });
  };
  const modal=$('#cultureModal');
  const openModal=it=>{
    setImg($('#modalImg'),it);
    $('#modalCategory').textContent=it.categoryLabel;$('#modalOrigin').textContent='📍 Asal: '+it.origin;
    $('#modalTitle').textContent=it.title;$('#modalDesc').textContent=it.fullDesc;$('#modalPhilosophy').textContent=it.philosophy;
    modal.classList.add('show');
  };
  $('#closeModal').onclick=()=>modal.classList.remove('show');
  modal.onclick=e=>{if(e.target===modal)modal.classList.remove('show')};
  addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('show')});
  const cur=()=>$('.tab-btn.active').dataset.filter;
  const setNav=f=>$$('[data-nav]').forEach(a=>a.classList.toggle('on',a.dataset.nav===f));
  tabs.forEach(b=>b.onclick=()=>{tabs.forEach(x=>x.classList.toggle('active',x===b));setNav(b.dataset.filter);render(b.dataset.filter,input.value)});
  input.addEventListener('input',()=>{chip.hidden=true;$$('.pin').forEach(p=>p.classList.remove('on'));render(cur(),input.value)});
  // Peta interaktif
  $$('.pin').forEach(p=>p.onclick=()=>{
    $$('.pin').forEach(x=>x.classList.toggle('on',x===p));
    input.value=p.dataset.prov;render(cur(),input.value);
    $('#chipText').textContent='Provinsi: '+p.dataset.prov;chip.hidden=false;
    $('#koleksi').scrollIntoView({behavior:'smooth'});
  });
  $('#chipX').onclick=()=>{input.value='';chip.hidden=true;$$('.pin').forEach(p=>p.classList.remove('on'));render(cur(),'')};
  render();
  // Menu navbar -> filter kategori
  const hashGo=()=>{const b=$(`.tab-btn[data-filter="${location.hash.slice(1)}"]`);if(b){b.click();$('#koleksi').scrollIntoView({behavior:'smooth'})}};
  addEventListener('hashchange',hashGo);hashGo();
  $$('#nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
}
