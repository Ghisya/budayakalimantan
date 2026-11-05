// ===== Kuliner: ketuk kartu -> popup asal-usul + bahan + cara membuat =====
// Untuk menambah/mengubah makanan: edit daftar MAKANAN di bawah ini.
// Foto kartu diambil dari folder images/makanan/ (foto yang dikirim Ghisya).

const MAKANAN = [
{
  nama:"Nasi Subut", asal:"Tana Tidung, Kalimantan Utara (Suku Tidung)", ikon:"💜",
  img:"../images/makanan/nasi-subut.png",
  singkat:"Nasi ungu dari ubi ungu dan jagung manis, biasanya disajikan dengan sate ikan pari.",
  asalUsul:"Nasi Subut adalah makanan khas penduduk asli Kabupaten Tana Tidung, Kalimantan Utara, dari masyarakat Suku Tidung. Warna ungunya bukan pewarna buatan, melainkan warna alami ubi jalar ungu yang dimasak bersama beras. Hidangan ini lahir dari tradisi memanfaatkan hasil pertanian setempat — ubi dan jagung — yang dicampur dengan beras agar rasanya lebih manis dan teksturnya pulen. Lauk pendamping yang paling khas adalah sate ikan pari.",
  bahan:["500 gram beras","200 gram ubi ungu, potong dadu (di foto: diiris tipis di atas nasi)","200 gram jagung manis, pipil","500 ml air","Garam secukupnya","Penyedap secukupnya (opsional)","Sate ikan pari sebagai lauk (opsional)"],
  cara:["Cuci beras sampai bersih, lalu tiriskan.","Potong ubi ungu menjadi dadu kecil dan pipil jagung manis.","Campur beras, ubi ungu, dan jagung dalam panci atau rice cooker, tambahkan air dan garam.","Masak seperti memasak nasi biasa sampai matang, pulen, dan warnanya merata ungu.","Sajikan hangat, paling pas ditemani sate ikan pari."]
},
{
  nama:"Es Jagung", asal:"Banjarmasin, Kalimantan Selatan & Pontianak, Kalimantan Barat", ikon:"🌽",
  img:"../images/makanan/es-jagung.jpg",
  singkat:"Minuman dingin dari jagung manis rebus dengan susu dan sirup gula, pelepas dahaga di cuaca panas.",
  asalUsul:"Es jagung adalah minuman khas yang populer di Banjarmasin, Kalimantan Selatan, dan juga di Pontianak, Kalimantan Barat — bahkan sampai Samarinda, Kalimantan Timur. Bahan dasarnya sederhana: jagung manis yang direbus. Karena manis, segar, dan mudah dibuat, es jagung sering dijajakan di pinggir jalan dan menjadi menu takjil saat berbuka puasa.",
  bahan:["1–2 bonggol jagung manis, pipil","100 ml susu full cream atau susu kental manis secukupnya","3 sendok makan gula pasir","1 lembar daun pandan","100 ml air (untuk sirup gula)","Nata de coco secukupnya (opsional)","Es batu atau es serut secukupnya"],
  cara:["Rebus jagung pipil bersama daun pandan sampai matang, lalu tiriskan.","Masak gula pasir, air, dan daun pandan sampai gula larut menjadi sirup, lalu dinginkan.","Susun di dalam gelas: es batu, jagung pipil rebus, dan nata de coco.","Tuang susu dan sirup gula secukupnya, aduk rata.","Sajikan dingin — seperti di foto, kuahnya bisa memakai susu sehingga berwarna putih lembut."]
},
{
  nama:"Kaloci", asal:"Pontianak, Kalimantan Barat", ikon:"🍡",
  img:"../images/makanan/kaloci.jpg",
  singkat:"Kue ketan kenyal berbentuk kotak, dibalur kacang tanah sangrai dan gula — versi foto memakai pandan sehingga berwarna hijau.",
  asalUsul:"Kaloci adalah camilan khas Pontianak, Kalimantan Barat. Kaloci merupakan varian mochi yang diadopsi ke Pontianak, tetapi dengan perbedaan penting: kalau mochi berisi kacang di dalamnya, kaloci tidak memakai isian sama sekali — kacang tanah sangrai yang dihaluskan bersama gula justru ditaburkan di luarnya. Bentuknya pun bukan bulat, melainkan dipotong kotak-kotak. Versi hijau di foto memakai pasta pandan.",
  bahan:["200 gram tepung ketan putih","200 ml air","30 ml minyak","Garam sejumput","Gula pasir secukupnya","Pasta pandan secukupnya (untuk warna hijau)","Taburan: 150 gram kacang tanah sangrai","Taburan: 50 gram gula pasir"],
  cara:["Sangrai kacang tanah sampai matang, kupas kulitnya, lalu blender bersama gula pasir menjadi taburan.","Campur tepung ketan, gula, garam, dan minyak, tuang air sedikit demi sedikit sambil diaduk sampai adonan licin dan halus, tambahkan pasta pandan.","Oles loyang dengan minyak, tuang adonan, lalu kukus sekitar 15 menit.","Keluarkan dari loyang, balur seluruh permukaannya dengan taburan kacang sampai rata.","Potong kotak-kotak sesuai selera, lalu sajikan."]
},
{
  nama:"Pisang Gapit", asal:"Kalimantan (Banjar & Kutai, populer di Balikpapan)", ikon:"🍌",
  img:"../images/makanan/pisang-gapit.png",
  singkat:"Pisang kepok yang dibakar lalu dijepit sampai pipih, disiram kuah kinca gula merah dan santan.",
  asalUsul:"Pisang gapit adalah makanan khas Kalimantan yang populer di Balikpapan dan daerah Banjar. Kata “gapit” berasal dari bahasa Banjar dan Kutai yang berarti “jepit”: pisang yang sudah dibakar dijepit dengan kayu atau talenan sampai agak pipih. Pisang gapit biasanya disajikan dengan siraman saus manis gurih bernama kuah kinca, yang terbuat dari gula merah dan santan, kadang ditambah potongan nangka atau taburan keju.",
  bahan:["6–10 buah pisang kepok matang","2 sendok makan margarin untuk memanggang","Kuah kinca: 250–500 ml santan","Kuah kinca: 100–250 gram gula merah, sisir","Kuah kinca: 1–2 lembar daun pandan","Kuah kinca: garam sejumput","Kuah kinca: 1 sendok makan tepung maizena, larutkan dengan sedikit air","Topping: keju parut atau potongan nangka (opsional)"],
  cara:["Kupas pisang kepok, lalu pipihkan (gapit) dengan talenan atau ulekan sampai agak pipih.","Oles teflon dengan margarin, panggang pisang bolak-balik sampai kedua sisinya kecokelatan, lalu sisihkan.","Masak kuah kinca: campur santan, gula merah, daun pandan, dan garam, aduk sambil dimasak sampai mendidih dan gula larut.","Masukkan larutan maizena, aduk sampai kuah mengental, lalu angkat.","Tata pisang di piring, siram dengan kuah kinca, taburi keju atau nangka bila suka."]
}
];

(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const grid=$('#mkGrid'), modal=$('#mkModal');
  if(!grid||!modal) return;
  let cur=0;

  grid.innerHTML=MAKANAN.map((m,i)=>`<article class="mk-food-card" data-i="${i}">
    <div class="mk-food-img"><img src="${m.img}" alt="${m.nama}" loading="lazy"><span class="mk-food-ikon">${m.ikon}</span></div>
    <div class="mk-food-txt"><span class="mk-food-asal">📍 ${m.asal}</span>
    <h3>${m.nama}</h3><p>${m.singkat}</p>
    <button class="mk-food-btn" data-i="${i}">Lihat Asal & Resep &rarr;</button></div>
  </article>`).join('');
  $$('.mk-food-card',grid).forEach(c=>c.addEventListener('click',()=>openFood(+c.dataset.i)));

  function openFood(i){
    cur=i; const m=MAKANAN[i];
    $('#mkImg').src=m.img; $('#mkImg').alt=m.nama;
    $('#mkAsal').textContent='📍 '+m.asal;
    $('#mkNama').textContent=m.nama;
    $('#mkDesc').textContent=m.asalUsul;
    $('#mkBahan').innerHTML=m.bahan.map(b=>`<li>${b}</li>`).join('');
    $('#mkCara').innerHTML=m.cara.map(c=>`<li>${c}</li>`).join('');
    $('#mkHitung').textContent=(i+1)+' dari '+MAKANAN.length+' makanan';
    modal.classList.add('open'); document.body.style.overflow='hidden';
  }
  const close=()=>{ modal.classList.remove('open'); document.body.style.overflow=''; };
  const step=d=>openFood((cur+d+MAKANAN.length)%MAKANAN.length);
  $('#mkClose').onclick=close;
  modal.addEventListener('click',e=>{ if(e.target===modal) close(); });
  $('#mkPrev').onclick=()=>step(-1);
  $('#mkNext').onclick=()=>step(1);
  addEventListener('keydown',e=>{
    if(!modal.classList.contains('open')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') step(-1);
    if(e.key==='ArrowRight') step(1);
  });
})();
