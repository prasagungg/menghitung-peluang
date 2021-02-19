const penyelesain = document.getElementById('penyelesain');
const form = document.getElementById('form');
const n = document.getElementById('n');
const k = document.getElementById('k');

const mencariFaktorial = num => {
  return num === 1 ? 1 : (num * mencariFaktorial(num - 1));
}

const mencariKombinasi = (penyebut, pembilang) => {
  return penyebut/pembilang;
}

const mencariPembilang = (n,k) => {
  return mencariFaktorial(k) * mencariFaktorial(n-k);
}

const domPenyelesaian = (n,k,penyebut,pembilang,hasil) => {
  let html = `
  <table>
    <tr>
      <td class="garis">${n}!</td>
    </tr>
    <tr>
      <td>${k}!.(${n} - ${k})!</td>
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
  `;

  penyelesain.innerHTML = html;
}

function eventMencariKombinasi(e){
  e.preventDefault();

  if (n.value.trim() === '' || k.value.trim() === ''){
    alert('masukan nilai n dan k');
  } else {
    const penyebut = mencariFaktorial(n.value);
    const pembilang = mencariPembilang(n.value, k.value);
    const hasil = mencariKombinasi(penyebut, pembilang);

    domPenyelesaian(n.value, k.value, penyebut, pembilang, hasil );
    console.log(penyebut);
    console.log(pembilang);
    console.log(hasil);
  }
}
form.addEventListener('submit', eventMencariKombinasi);
//console.log(mencariFaktorial(1));