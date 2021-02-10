const penyelesain = document.getElementById('penyelesain');
const form = document.getElementById('form');
const n = document.getElementById('n');
const k = document.getElementById('k');


const mencariFaktorial = num => {
  return num === 1 ? 1 : (num * mencariFaktorial(num - 1));
}

const mencariPermutasi = (penyebut,pembilang) => {
  return penyebut/pembilang;
}

function domPenyelesaian(n,k, penyebut, pembilang, hasil){
  let html = `
    <table>
      <tr>
        <td class="garis">${n}!</td>
      </tr>
      <tr>
        <td>(${n} - ${k})!</td>
      </tr>

      <tr>
        <td> </td>
      </tr>

      <tr>
        <td class="garis">${penyebut}</td>
      </tr>
      <tr>
        <td>${pembilang}</td>
      </tr>

      <tr>
        <td> </td>
      </tr>

      <tr>
        <td>${hasil} cara</td>
      </tr>
    </table>
  `
  penyelesain.innerHTML = html;
}

function eventMencariPermutasi(e){
  e.preventDefault();
  if (n.value.trim() === '' || k.value.trim() === '' ){
    alert('tambahkan nilai n dan k');
  } else {
    const penyebut = mencariFaktorial(n.value);
    const pembilang = mencariFaktorial(n.value - k.value);
    const hasil = mencariPermutasi(penyebut, pembilang);
    console.log(pembilang);
    domPenyelesaian(n.value, k.value, penyebut, pembilang, hasil);
  }
}

form.addEventListener('submit', eventMencariPermutasi);