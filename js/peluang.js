const penyelesain = document.getElementById('penyelesain');
const form = document.getElementById('form');
const ruangSampel = document.getElementById('ruangSampel');
const ruangSemesta = document.getElementById('ruangSemesta');

function eventCariPeluang(e) {
  e.preventDefault();

  if (ruangSampel.value.trim() === '' || ruangSemesta.value.trim() === ''){
    alert('Tambahkan ruang sampel dan ruang semesta');
  } else {
    let hasil = cariPeluang(ruangSampel.value, ruangSemesta.value);
    cariPeluangDOM(hasil, ruangSampel.value, ruangSemesta.value);
    
  }
}

function cariPeluang(ruangSampel, ruangSemesta){
  return ruangSampel/ruangSemesta;
}

function cariPeluangDOM(hasil, ruangSampel, ruangSemesta){
  let html =  `<img id="gambar" src="https://latex.codecogs.com/svg.latex?&#92frac{${ruangSampel}}{${ruangSemesta}}=${hasil}" border="0"/>`;
  penyelesain.innerHTML = html;
  //menungguGambar();
}
// function menungguGambar(){
//   const gambar = document.getElementById('gambar');
//   gambar.addEventListener("load", function (){
//     alert('tunggu sebentar');
//   });
// }


form.addEventListener('submit', eventCariPeluang);