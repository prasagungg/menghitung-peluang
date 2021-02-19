function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function removeError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
    const small = formControl.querySelector('small');
    small.innerText = '';
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            removeError(input);
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
        removeError(input);
        isNumber = true;
    }
    return isNumber;
}