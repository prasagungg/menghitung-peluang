const penyelesain = document.getElementById('penyelesain');
const form = document.getElementById('form');
const ruangSampel = document.getElementById('ruangSampel');
const ruangSemesta = document.getElementById('ruangSemesta');

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

form.addEventListener('submit', function (e){
  e.preventDefault();
  reset([ruangSampel, ruangSemesta]);
  checkRequired([ruangSampel, ruangSemesta]);
  checkNumber(ruangSampel);
  checkNumber(ruangSemesta);
  
  
  if (checkRequired([ruangSampel, ruangSemesta]) && checkNumber(ruangSemesta) && checkNumber(ruangSampel)) {
    let hasil = cariPeluang(ruangSampel.value, ruangSemesta.value);
    cariPeluangDOM(hasil, ruangSampel.value, ruangSemesta.value);
  }
  
    
});