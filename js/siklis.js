const penyelesain = document.getElementById('penyelesain');
const form = document.getElementById('form');
const n = document.getElementById('banyaknya');

const mencariFaktorial = num => {
  return num === 1 ? 1 : (num * mencariFaktorial(num - 1))
}

const mencariSiklis = num => {
  return num - 1;
}

function domMencariSiklis(n, siklis, hasil){
  let html = `
    <table>
      <tr>
        <td>P = (${n} - 1 )</td>
      </tr>
      <tr>
        <td>P = ${siklis}!</td>
      </tr>
      <tr>
        <td>P = ${hasil}</td>
      </tr>
    </table>
  `
  penyelesain.innerHTML = html;
}

form.addEventListener('submit', function (e) {
  e.preventDefault(e)
  reset([n]);
  checkRequired([n]);
  checkOne(n);

  if(checkRequired([n]) && checkOne(n)){
    let siklis = mencariSiklis(n.value);
    let hasil = mencariFaktorial(siklis);
    
    domMencariSiklis(n.value, siklis, hasil);
  }
});