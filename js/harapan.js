const penyelesain = document.getElementById('penyelesain');
const form = document.getElementById('form');
const ruangSampel = document.getElementById('ruangSampel');
const ruangSemesta = document.getElementById('ruangSemesta');
const banyakPercobaan = document.getElementById('banyakPercobaan');

function cariHarapan(peluang, banyak) {
  return peluang * banyak;
}

function cariPeluang(ruangSampel, ruangSemesta){
  return ruangSampel/ruangSemesta;
}

function cariHarapanDOM(ruangSampel, ruangSemesta, peluang, banyak, hasil){
  let html =  `
    <table>
      <tr>
        <td>1. mencari peluang</td>
      </tr>
      <tr>
        <td class="garis">${ruangSampel}</td>
      </tr>
      <tr>
        <td>${ruangSemesta}</td>
      </tr>
      <tr>
        <td> </td>
      </tr>
      <tr>
        <td> = ${peluang}</td>
      </tr>
      <tr>
        <td> </td>
      </tr>
      <tr>
        <td>2. frekuasi harapan</td>
      </tr>
      <tr>
        <td>${peluang} x ${banyak}</td>
      </tr>
      <tr>
        <td>${hasil} kali</td>
      </tr>
    </table>
  `;
  penyelesain.innerHTML = html;
  
}

form.addEventListener('submit', function (e){
  e.preventDefault();
  reset([ruangSampel, ruangSemesta, banyakPercobaan]);
  checkRequired([ruangSampel,ruangSemesta, banyakPercobaan]);
  checkNumber(ruangSampel);
  checkNumber(ruangSemesta);
  checkNumber(banyakPercobaan);

  if (checkRequired([ruangSampel,ruangSemesta, banyakPercobaan]) && checkNumber(ruangSampel) && checkNumber(ruangSemesta) && checkNumber(banyakPercobaan)){
    const peluang = cariPeluang(ruangSampel.value, ruangSemesta.value);
    const hasil = cariHarapan(peluang, banyakPercobaan.value);
    cariHarapanDOM(ruangSampel.value, ruangSemesta.value, peluang, banyakPercobaan.value, hasil);
  }

});