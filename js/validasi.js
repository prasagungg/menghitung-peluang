function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


function reset(inputArr){
    inputArr.forEach(function (input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control';
        const small = formControl.querySelector('small');
        small.innerText ='';
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} Harus Di isi`);
        } else {
            //removeError(input);
            isRequired = true;
        }
    });

    return isRequired;
}

function checkNumber(input) {
    let isNumber = false;

    if (input.value <= 0) {
        showError(input, `${getFieldName(input)} harus bilangan bulat`);
    } else {
        isNumber = true;
    }
    return isNumber;
}

function checkBigger(n,k){
    let isBigger = false;
    if (n.value <= k.value){
        showError(k, `${getFieldName(k)} tidak boleh lebih besar dan sama dengan ${getFieldName(n)}`);
    } else {
        isBigger = true;
    }
    return isBigger;
}

function checkOne (input) {
    let isOne = false
    if (input.value == 1){
        showError(input, `${getFieldName(input)} harus lebih dari 1`);
    } else {
        isOne = true;
    }
    return isOne;
}