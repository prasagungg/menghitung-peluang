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

form.addEventListener('submit', function (e) {
  e.preventDefault();

  reset([n,k]);
  const required = (checkRequired([n,k]));
  const numberN = (checkNumber(n));
  const numberK = (checkNumber(k));
  const bigger = (checkBigger(n,k));
  const oneN = (checkOne(n));
  const oneK = (checkOne(k));

  if (required && numberN && numberK && bigger && oneN && oneK) {
    const penyebut = mencariFaktorial(n.value);
    const pembilang = mencariPembilang(n.value, k.value);
    const hasil = mencariKombinasi(penyebut, pembilang);

    domPenyelesaian(n.value, k.value, penyebut, pembilang, hasil );
  }

});
//console.log(mencariFaktorial(1));