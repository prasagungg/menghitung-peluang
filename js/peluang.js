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
    // console.log(hasil);
    // cariPeluangDOM(hasil, ruangSampel.value, ruangSemesta.value);
    penyelesain.innerHTML = hasil;
  }
}

function cariPeluang(ruangSampel, ruangSemesta){
  return ruangSampel/ruangSemesta;
}

function cariPeluangDOM(hasil, ruangSampel, ruangSemesta){
  let html =  `\[P(a) = {n(a) \over n(s)}\]`;
  penyelesain.innerHTML = html;
  
}



form.addEventListener('submit', eventCariPeluang);