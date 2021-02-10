const penyelesain = document.getElementById('penyelesain');
const form = document.getElementById('form');
const ruangSampel = document.getElementById('ruangSampel');
const ruangSemesta = document.getElementById('ruangSemesta');
const banyakPercobaan = document.getElementById('banyakPercobaan');

function eventCariHarapan(e) {
  e.preventDefault();

  if (ruangSampel.value.trim() === '' || ruangSemesta.value.trim() === '' || banyakPercobaan.value.trim() === '' ){
    alert('Tambahkan ruang sampel, ruang semesta dan banyak percobaan');
  } else {
    const peluang = cariPeluang(ruangSampel.value, ruangSemesta.value);
    const hasil = cariHarapan(peluang, banyakPercobaan.value);
    cariHarapanDOM(ruangSampel.value, ruangSemesta.value, peluang, banyakPercobaan.value, hasil);
    console.log(peluang);
    console.log(hasil);
    
  }
}

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

form.addEventListener('submit', eventCariHarapan);