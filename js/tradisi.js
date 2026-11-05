// ===== Tradisi per suku: tombol di panel #budaya -> popup daftar tradisi =====
// Gambar diambil dari koleksi gambar web ini sendiri (folder images/),
// bukan dari kiriman baru. Tradisi tanpa foto yang cocok memakai ikon, bukan foto yang salah.

const TRADISI = {
kutai:{
  judul:"Tradisi Suku Kutai", kata:"Tenggarong • Kesultanan Kutai Kartanegara",
  intro:"Tradisi Kutai paling hidup dalam rangkaian Festival Erau di Tenggarong — dari pembukaan sampai penutupnya yang selalu ditunggu.",
  list:[
    {nama:"Festival Erau", img:"../images/festival-erau.jpg",
     desc:"Pesta adat tahunan Kesultanan Kutai Kartanegara di Tenggarong. Kata erau berasal dari eroh yang berarti ramai, riuh, dan penuh sukacita. Dahulu Erau adalah penobatan putra mahkota, kini menjadi festival budaya dan pesta rakyat."},
    {nama:"Belimbur", ikon:"💧",
     desc:"Tradisi saling siram air yang menutup rangkaian Erau. Belimbur adalah ungkapan syukur atas kelancaran Erau, sekaligus simbol membersihkan diri dari sifat buruk dan kesialan."},
    {nama:"Beseprah", ikon:"🍽️",
     desc:"Tradisi makan bersama sambil duduk bersila di atas tikar. Makanan khas Kutai digelar sepanjang jalan di depan Museum Mulawarman, dan semua lapisan masyarakat — dari Sultan sampai warga biasa — duduk dan makan bersama tanpa sekat."},
    {nama:"Mengulur Naga", ikon:"🐉",
     desc:"Prosesi mengarak replika Naga Laki dan Naga Bini dari keraton, lalu melarungkannya menyusuri Sungai Mahakam menuju Kutai Lama. Setelah prosesi naga inilah Belimbur digelar sebagai penutup Erau."}
  ]
},
dayak:{
  judul:"Tradisi Suku Dayak", kata:"Pedalaman & tepian sungai Borneo",
  intro:"Tradisi Dayak berputar pada dua hal besar: syukur atas panen dan penghormatan pada leluhur — keduanya dirayakan bersama seluruh kampung.",
  list:[
    {nama:"Gawai Dayak", img:"../images/tari-gantar-giring-giring.jpg",
     desc:"Perayaan syukur atas hasil panen padi. Masyarakat menari, bernyanyi, dan berbagi makanan sebagai wujud terima kasih kepada Tuhan dan roh penjaga alam atas panen yang melimpah."},
    {nama:"Hudoq", img:"../images/tari-ritual-hudoq.jpg",
     desc:"Tarian topeng dari Dayak Bahau dan Modang di Kalimantan Timur. Penari memakai topeng kayu dan jubah daun untuk memohon berkah masa tanam dan mengusir hama dari ladang."},
    {nama:"Tiwah", img:"../images/upacara-sakral-tiwah.jpg",
     desc:"Upacara kematian tingkat akhir dalam kepercayaan Kaharingan (Dayak Ngaju, Kalimantan Tengah). Tulang leluhur disucikan lewat ritual panjang, lalu ditempatkan di Sandung — rumah kecil berukir — untuk mengantarkan arwah menuju Lewu Tatau (surga)."},
    {nama:"Naik Dango", img:"../images/naik-dango.jpg",
     desc:"Syukuran panen tahunan Dayak Kanayatn di Kalimantan Barat. Seikat padi hasil panen disimpan di lumbung (dango) sebagai ungkapan syukur kepada Jubata, sekaligus harapan agar musim tanam berikutnya lebih melimpah."}
  ]
}
};

(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const modal=$('#trModal');
  if(!modal) return;
  const keys=Object.keys(TRADISI);
  let cur=0;
  function openSuku(key){
    cur=keys.indexOf(key); const t=TRADISI[key];
    $('#trKata').textContent=t.kata; $('#trJudul').textContent=t.judul; $('#trIntro').textContent=t.intro;
    $('#trHitung').textContent=(cur+1)+' dari '+keys.length+' suku';
    $('#trList').innerHTML=t.list.map(i=>`<article class="tr-item">
      ${i.img?`<img src="${i.img}" alt="${i.nama}" loading="lazy">`:`<div class="tr-emoji">${i.ikon}</div>`}
      <div><h4>${i.nama}</h4><p>${i.desc}</p></div></article>`).join('');
    modal.classList.add('open'); document.body.style.overflow='hidden';
  }
  const close=()=>{ modal.classList.remove('open'); document.body.style.overflow=''; };
  $$('.trad-btn').forEach(b=>b.addEventListener('click',()=>openSuku(b.dataset.suku)));
  $('#trClose').onclick=close;
  modal.addEventListener('click',e=>{ if(e.target===modal) close(); });
  const step=d=>openSuku(keys[(cur+d+keys.length)%keys.length]);
  $('#trPrev').onclick=()=>step(-1);
  $('#trNext').onclick=()=>step(1);
  addEventListener('keydown',e=>{
    if(!modal.classList.contains('open')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') step(-1);
    if(e.key==='ArrowRight') step(1);
  });
})();
