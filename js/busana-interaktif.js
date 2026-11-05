// ===== Jelajah Busana Interaktif =====
// Cara kerja: pilih tokoh -> ketuk titik emas pada tubuh tokoh ATAU ketuk kartu bagiannya
// -> muncul popup berisi foto bagian itu saja + penjelasan + maknanya.
// Untuk menambah/mengubah isi: edit daftar TOKOH di bawah ini (nama, img, x/y titik, desc, makna).

const TOKOH = [
{
  id:"dayak-perempuan", suku:"Dayak", nama:"Perempuan Dayak", busana:"King Bibinge",
  figure:"../images/busana/tokoh-dayak-perempuan.png",
  intro:"Busana perempuan Dayak dari kulit kayu dan manik-manik, dipakai pada upacara adat, penyambutan tamu, dan pesta panen.",
  parts:[
    {kode:"A1", nama:"Hiasan Kepala Bulu Enggang", img:"../images/busana/dayak-a1-hiasan-kepala.png", x:50, y:9,
     desc:"Mahkota dengan susunan bulu burung enggang yang tegak menjulang, dipasang pada ikat kepala bermotif manik warna-warni.",
     makna:"Burung enggang adalah lambang kesetiaan, perdamaian, dan dunia atas yang suci. Karena itu hiasan ini hanya dipakai pada kesempatan terhormat."},
    {kode:"A2", nama:"Atasan King Bibinge", img:"../images/busana/dayak-a2-atasan.png", x:50, y:36,
     desc:"Atasan perempuan Dayak berhias ribuan manik dan motif aso (naga) serta sulur berwarna kuning, merah, dan biru di atas dasar hitam. Bahan aslinya dari kulit kayu hutan yang ditempa hingga halus.",
     makna:"Manik-manik adalah harta pusaka yang menandai martabat keluarga dan dipercaya menolak bala. Motif aso dan sulur menggambarkan penjaga, kekuatan, dan kesuburan alam."},
    {kode:"A3", nama:"Rok Bermotif Aso & Sulur", img:"../images/busana/dayak-a3-rok.png", x:50, y:68,
     desc:"Bawahan panjang dengan motif sulur dan naga (aso) yang mengalir dari pinggang sampai ke bawah, dilengkapi tepian manik di bagian pinggang.",
     makna:"Motif yang mengalir seperti sungai melambangkan kehidupan dan kesuburan. Hitam berarti keteguhan, merah keberanian, dan kuning keluhuran."},
    {kode:"A4", nama:"Hiasan Bulu di Tangan", img:"../images/busana/dayak-a4-hiasan-tangan.png", x:86, y:36,
     desc:"Hiasan bulu putih yang dipegang atau dipasang di kedua tangan, ikut bergerak mengikuti ayunan tangan saat menari atau menyambut tamu.",
     makna:"Melambangkan kelembutan dan keterbukaan menyambut tamu — berani menjaga kampung, tetapi tetap ramah dan membawa damai."}
  ]
},
{
  id:"dayak-laki", suku:"Dayak", nama:"Laki-Laki Dayak", busana:"King Baba",
  figure:"../images/busana/tokoh-dayak-laki.png",
  intro:"Busana laki-laki Dayak sang ksatria penjaga kampung, lengkap dengan rompi bermotif, perisai, dan hiasan bulu enggang.",
  parts:[
    {kode:"B1", nama:"Hiasan Kepala Bulu Enggang", img:"../images/busana/dayak-b1-hiasan-kepala.png", x:50, y:10,
     desc:"Mahkota bulu enggang putih dan cokelat dengan hiasan manik serta motif di bagian depan, dikenakan di kepala para pria pada upacara adat.",
     makna:"Menandai kehormatan dan kedewasaan pemakainya. Bulu enggang melambangkan kesetiaan, perdamaian, dan kemuliaan."},
    {kode:"B2", nama:"Rompi King Baba", img:"../images/busana/dayak-b2-rompi.png", x:44, y:32,
     desc:"Rompi pria Dayak dari kulit kayu berhias motif aso dan sulur warna-warni, rumbai di tepinya, serta hiasan taring di bagian dada.",
     makna:"Rompi yang kokoh melambangkan perlindungan dan kesiapsiagaan menjaga keluarga serta kampung, sedangkan motifnya bercerita tentang alam dan leluhur."},
    {kode:"B3", nama:"Bawahan & Kain Pinggang", img:"../images/busana/dayak-b3-bawahan.png", x:44, y:58,
     desc:"Bawahan hitam dengan kain pinggang bermotif emas berbentuk simbol khas Dayak dan rumbai di kedua sisi, dipadukan dengan ikat pinggang.",
     makna:"Motif pada kain pinggang adalah penanda identitas suku dan status pemakainya dalam masyarakat adat."},
    {kode:"B4", nama:"Perisai Talawang", img:"../images/busana/dayak-b4-perisai.png", x:88, y:44,
     desc:"Pelengkap busana berupa perisai kayu ringan namun kuat, dilukis motif wajah dan sulur berwarna kuning, merah muda, dan hitam. Perisai ini biasa dibawa bersama mandau.",
     makna:"Selain melindungi tubuh, motif pada Talawang melambangkan keteraturan alam atas dan alam bawah serta keberanian menghadapi niat buruk."},
    {kode:"B5", nama:"Hiasan Bulu Lengan", img:"../images/busana/dayak-b6-gelang-lengan.png", x:7, y:36,
     desc:"Hiasan bulu putih yang diikatkan di lengan atas, serasi dengan hiasan kepala dan ikut bergerak saat pemakainya menari atau beraksi.",
     makna:"Melambangkan kesiapsiagaan dan kelincahan, sekaligus keharmonisan satu set busana dari kepala sampai kaki."},
    {kode:"B6", nama:"Hiasan Kaki Bermotif", img:"../images/busana/dayak-b5-hiasan-kaki.png", x:50, y:84,
     desc:"Penutup dan hiasan betis bermotif sulur emas dengan rumbai manik, melengkapi busana sampai ke bagian kaki.",
     makna:"Busana adat dipakai lengkap dari kepala sampai kaki sebagai tanda penghormatan penuh pada acara adat yang dihadiri."}
  ]
},
{
  id:"kutai-perempuan", suku:"Kutai", nama:"Perempuan Kutai", busana:"Miskat",
  figure:"../images/busana/tokoh-kutai-perempuan.jpg",
  intro:"Busana perempuan Kutai yang tertutup rapi dan anggun, warisan lingkungan keraton Kesultanan Kutai Kartanegara.",
  parts:[
    {kode:"A1", nama:"Sanggul & Tusuk Sanggul", img:"../images/busana/kutai-a1-sanggul.jpg", x:38, y:6,
     desc:"Rambut ditata menjadi sanggul (coif) yang rapi, lalu dihias tusuk sanggul berbentuk bunga di sisi kepala.",
     makna:"Kerapian sanggul dan tusuknya melambangkan kesopanan, keanggunan, dan penjagaan kehormatan perempuan Kutai."},
    {kode:"A2", nama:"Kalung Perak Berukir", img:"../images/busana/kutai-a2-kalung.jpg", x:58, y:29,
     desc:"Kalung dengan liontin perak besar berukir motif sulur yang rumit, dikenakan di dada sebagai perhiasan utama.",
     makna:"Perhiasan perak berukir menandai kemuliaan dan status keluarga, sekaligus menjadi pusaka yang diwariskan turun-temurun."},
    {kode:"A3", nama:"Gelang Perak", img:"../images/busana/kutai-a3-gelang.jpg", x:43, y:49,
     desc:"Gelang lebar dari perak yang melingkari pergelangan tangan, berpasangan di kedua lengan.",
     makna:"Kilau perak melambangkan harapan agar kehidupan pemakainya selalu bercahaya, seperti hiasan benang emas pada busana Kutai."},
    {kode:"A4", nama:"Atasan Beludru Miskat", img:"../images/busana/kutai-a4-atasan.jpg", x:48, y:40,
     desc:"Atasan beludru hitam longgar yang menutup tubuh, dihias sulaman benang emas bermotif tumbuhan di sepanjang dada, kerah, dan ujung lengan.",
     makna:"Busana tertutup menunjukkan kesopanan dan kehormatan. Sulaman emas melambangkan kejayaan dan kemuliaan Kesultanan Kutai."},
    {kode:"A5", nama:"Rok / Sarung Bermotif", img:"../images/busana/kutai-a5-rok.jpg", x:48, y:75,
     desc:"Bawahan panjang bermotif cokelat-emas dengan garis emas di sisi dan hiasan bunga di tepian bawah, dipadukan dengan atasan beludru.",
     makna:"Kain bawahan buatan tangan melambangkan ketekunan dan kesabaran, serta identitas masyarakat pesisir Sungai Mahakam."}
  ]
},
{
  id:"kutai-laki", suku:"Kutai", nama:"Laki-Laki Kutai", busana:"Kustin",
  figure:"../images/busana/tokoh-kutai-laki.jpg",
  intro:"Busana kebesaran laki-laki Kutai yang dahulu dikenakan bangsawan Kesultanan Kutai Kartanegara pada upacara besar.",
  parts:[
    {kode:"B1", nama:"Setorong (Penutup Kepala)", img:"../images/busana/kutai-b1-tanjak.jpg", x:48, y:7,
     desc:"Penutup kepala hitam bergaris emas berbentuk khas seperti pada gambar (pada lembar gambar disebut tanjak), dikenakan para pria Kutai.",
     makna:"Penutup kepala menandai wibawa dan status pemakainya sebagai pemimpin keluarga atau kalangan bangsawan."},
    {kode:"B2", nama:"Kalung Perak Berukir", img:"../images/busana/kutai-b2-kalung.jpg", x:48, y:31,
     desc:"Kalung dengan liontin perak besar berukir sulur, sama seperti kalung perempuan, dikenakan di atas jaket beludru.",
     makna:"Menandai kemuliaan dan kejayaan, serta menjadi penyeimbang kemewahan sulaman emas pada jaket."},
    {kode:"B3", nama:"Jaket Beludru Kustin", img:"../images/busana/kutai-b3-jaket.jpg", x:48, y:42,
     desc:"Jaket beludru hitam berkerah tinggi dengan kancing emas dan sulaman benang emas di dada serta ujung lengan. Kata Kustin berarti kostum kebesaran.",
     makna:"Beludru hitam berpadu emas menampilkan sosok yang berwibawa, santun, dan terhormat, sesuai nilai Melayu-Islam masyarakat Kutai."},
    {kode:"B4", nama:"Kain Samping (Sash Pinggang)", img:"../images/busana/kutai-b4-sash.jpg", x:48, y:62,
     desc:"Kain bermotif yang dililitkan di pinggang di atas celana, dengan rumbai emas yang menjuntai di bagian depan.",
     makna:"Kain samping adalah penanda busana resmi keraton — dipakai pada upacara besar seperti pernikahan dan pesta Erau."},
    {kode:"B5", nama:"Bawahan Bermotif", img:"../images/busana/kutai-b5-bawahan.jpg", x:48, y:82,
     desc:"Bawahan bermotif cokelat-emas serasi dengan kain samping, melengkapi setelan Kustin dari pinggang ke bawah.",
     makna:"Keserasian motif dari atas sampai bawah menunjukkan kerapian dan penghormatan pada tamu serta acara adat."},
    {kode:"B6", nama:"Gelang Lengan (Arm Band)", img:"../images/busana/kutai-b6-gelang-lengan.jpg", x:14, y:50,
     desc:"Lingkar lengan hitam berhias sulaman emas bermotif bunga, dipasang di lengan sebagai perhiasan pelengkap.",
     makna:"Detail kecil berharga ini menunjukkan ketelitian budaya Kutai: kehormatan ditampilkan sampai pada bagian terkecil busana."}
  ]
}
];

(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const tabsEl=$('#biTokohTabs'), stage=$('#biStage'), cardsEl=$('#biCards'),
        titleEl=$('#biJudul'), introEl=$('#biIntro'), progEl=$('#biProgress'),
        modal=$('#biModal'), mImg=$('#biModalImg'), mKode=$('#biModalKode'),
        mNama=$('#biModalNama'), mDesc=$('#biModalDesc'), mMakna=$('#biModalMakna'),
        mHitung=$('#biModalHitung');
  if(!tabsEl||!stage||!modal) return;

  const KEY='busanaDijelajahi';
  let seen=new Set(JSON.parse(localStorage.getItem(KEY)||'[]'));
  let cur=0, curPart=0;

  const total=TOKOH.reduce((n,t)=>n+t.parts.length,0);
  const save=()=>localStorage.setItem(KEY,JSON.stringify([...seen]));
  const seenId=(ti,pi)=>TOKOH[ti].id+':'+TOKOH[ti].parts[pi].kode;

  function renderProgress(){
    progEl.innerHTML=`Sudah dijelajahi <b>${seen.size} dari ${total}</b> bagian busana
      <span class="bi-bar"><i style="width:${Math.round(seen.size/total*100)}%"></i></span>
      ${seen.size===total?'🎉 Semua bagian sudah dibaca!':''}`;
  }

  function renderTokoh(){
    const t=TOKOH[cur];
    titleEl.textContent=`${t.nama} — ${t.busana}`;
    introEl.textContent=t.intro;
    // Panggung tokoh + titik panas
    stage.innerHTML=`<img src="${t.figure}" alt="Tokoh ${t.nama} berbusana ${t.busana}">`+
      t.parts.map((p,i)=>`<button class="bi-hot ${seen.has(seenId(cur,i))?'seen':''}" style="left:${p.x}%;top:${p.y}%"
        data-i="${i}" aria-label="${p.nama}"><span>${p.kode}</span><em>${p.nama}</em></button>`).join('');
    $$('.bi-hot',stage).forEach(b=>b.onclick=()=>openPart(+b.dataset.i));
    // Kartu daftar bagian
    cardsEl.innerHTML=t.parts.map((p,i)=>`<button class="bi-card ${seen.has(seenId(cur,i))?'seen':''}" data-i="${i}">
        <img src="${p.img}" alt="${p.nama}" loading="lazy"><span><b>${p.kode}. ${p.nama}</b>
        <small>${seen.has(seenId(cur,i))?'✓ Sudah dibaca — ketuk untuk baca lagi':'Ketuk untuk lihat gambar + maknanya'}</small></span></button>`).join('');
    $$('.bi-card',cardsEl).forEach(b=>b.onclick=()=>openPart(+b.dataset.i));
    $$('.bi-tab',tabsEl).forEach((b,i)=>b.classList.toggle('active',i===cur));
    renderProgress();
  }

  function openPart(i){
    curPart=i;
    const t=TOKOH[cur], p=t.parts[i];
    mImg.src=p.img; mImg.alt=p.nama;
    mKode.textContent=`${t.suku} • ${t.busana} • Bagian ${p.kode}`;
    mNama.textContent=p.nama; mDesc.textContent=p.desc; mMakna.textContent=p.makna;
    mHitung.textContent=`${i+1} dari ${t.parts.length} bagian ${t.nama}`;
    modal.classList.add('open'); document.body.style.overflow='hidden';
    if(!seen.has(seenId(cur,i))){ seen.add(seenId(cur,i)); save(); }
    renderTokohSoft();
  }
  // Segarkan tanda "sudah dibaca" tanpa mengganti tokoh yang sedang tampil di popup
  function renderTokohSoft(){
    const t=TOKOH[cur];
    $$('.bi-hot',stage).forEach((b,i)=>b.classList.toggle('seen',seen.has(seenId(cur,i))));
    $$('.bi-card',cardsEl).forEach((b,i)=>{
      b.classList.toggle('seen',seen.has(seenId(cur,i)));
      if(seen.has(seenId(cur,i))) $('small',b).textContent='✓ Sudah dibaca — ketuk untuk baca lagi';
    });
    renderProgress();
  }
  const close=()=>{ modal.classList.remove('open'); document.body.style.overflow=''; };
  const step=d=>openPart((curPart+d+TOKOH[cur].parts.length)%TOKOH[cur].parts.length);

  $('#biClose').onclick=close;
  modal.addEventListener('click',e=>{ if(e.target===modal) close(); });
  $('#biPrev').onclick=()=>step(-1);
  $('#biNext').onclick=()=>step(1);
  addEventListener('keydown',e=>{
    if(!modal.classList.contains('open')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') step(-1);
    if(e.key==='ArrowRight') step(1);
  });

  // Tab tokoh
  tabsEl.innerHTML=TOKOH.map((t,i)=>`<button class="bi-tab" data-i="${i}">${t.suku} • ${t.nama.includes('Perempuan')?'Perempuan':'Laki-Laki'}<small>${t.busana}</small></button>`).join('');
  $$('.bi-tab',tabsEl).forEach(b=>b.onclick=()=>{ cur=+b.dataset.i; renderTokoh(); });

  // Tombol kejutan + reset
  $('#biAcak').onclick=()=>{
    cur=Math.floor(Math.random()*TOKOH.length); renderTokoh();
    openPart(Math.floor(Math.random()*TOKOH[cur].parts.length));
  };
  $('#biReset').onclick=()=>{ seen.clear(); save(); renderTokoh(); };

  renderTokoh();
})();
