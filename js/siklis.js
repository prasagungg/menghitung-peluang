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


function eventMencariSiklis(e){
  e.preventDefault();
  const banyaknya = n.value;

  if (n.value.trim() === ''){
    alert('tambahkan banyaknya (n)');
  } else {

    let siklis = mencariSiklis(banyaknya);
    let hasil = mencariFaktorial(siklis);
    
    domMencariSiklis(banyaknya, siklis, hasil);

  }
}
form.addEventListener('submit', eventMencariSiklis);