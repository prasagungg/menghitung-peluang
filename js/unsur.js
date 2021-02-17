const penyelesain = document.getElementById('penyelesain');
const form = document.getElementById('form');
const kata = document.getElementById('kata');

const mencariFaktorial = num => {
    return num === 1 ? 1 : (num * mencariFaktorial(num - 1))
}

const mencariPanjang = kata => kata.length;

const mencariHasil = (penyebut, pembilang) => penyebut/pembilang;


function mencariPersamaan(kata){
    
    let data = kata.split("");
    let count = 0;
    let jawaban = [];
    data.sort();
    for(let i = 0; i < data.length; i++){     
        if(data[i] == data[i-1]){
            count++;
        }else{        
            count = 1;        
        }

        if(data[i] != data[i+1]){
            if (count > 1){
                jawaban.push(count);
            }
        }           
    }
    return jawaban;
}

function domPenyelesaian(panjang, panjangFaktorial, dataSebelumFaktorial, dataSetelahFaktorial, hasil){
    let sebelumFaktorial = dataSebelumFaktorial.map(penyebut => showPenyebut(penyebut));
    let html = `
        <table>
            <tr>
                <td class="garis">${panjang}!</td>
            </tr>
            <tr>
                <td>${sebelumFaktorial}</td>
            </tr>
            <tr>
                <td> </td>
            </tr>
            <tr>
                <td class="garis">${panjangFaktorial}</td>
            </tr>
            <tr>
                <td>${dataSetelahFaktorial}</td>
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

function showPenyebut(p){
    return `${p}!`;
}


function eventMencari(e) {
    e.preventDefault();

    if (kata.value.trim() === ''){
        alert('tambahkan kata');
    } else {
        const panjang = mencariPanjang(kata.value);
        const panjangFaktorial = mencariFaktorial(panjang);
        const dataSebelumFaktorial = mencariPersamaan(kata.value);
        const dataSetelahFaktorial = dataSebelumFaktorial.map(e =>  mencariFaktorial(e))
        const hasilKali = dataSetelahFaktorial.reduce((val, element) => val*element);
        const hasil = mencariHasil(panjangFaktorial, hasilKali);

        console.log(hasilKali);
        console.log(dataSebelumFaktorial);
        console.log(dataSetelahFaktorial);
        domPenyelesaian(panjang,panjangFaktorial, dataSebelumFaktorial, dataSetelahFaktorial, hasil);
        
    }
}

form.addEventListener('submit', eventMencari);

