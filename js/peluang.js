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
  let html =  `
    <table>
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
        <td>${hasil}</td>
      </tr>
    </table>
  `;
  penyelesain.innerHTML = html;
  
}

form.addEventListener('submit', eventCariPeluang);