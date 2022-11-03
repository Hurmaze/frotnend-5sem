//Task 1
var form = document.querySelector('form');

function onSubmit() {
    var isError = false;
    if (!validateName()) {
        document.getElementById('name').style.background = "rgb(255,190,190)";
        isError = true;
    } else {
        document.getElementById('name').style.background = "rgb(255,255,255)";
    }

    if (!validateIdCard()) {
        document.getElementById('idCard').style.background = "rgb(255,190,190)";
        isError = true;
    } else {
        document.getElementById('idCard').style.background = "rgb(255,255,255)";
    }

    if (!validateBirthday()) {
        document.getElementById('birthday').style.background = "rgb(255,190,190)";
        isError = true;
    } else {
        document.getElementById('birthday').style.background = "rgb(255,255,255)";
    }

    if (!validateAddress()) {
        document.getElementById('address').style.background = "rgb(255,190,190)";
        isError = true;
    } else {
        document.getElementById('address').style.background = "rgb(255,255,255)";
    }

    if (!validateEmail()) {
        document.getElementById('email').style.background = "rgb(255,190,190)";
        isError = true;
    } else {
        document.getElementById('email').style.background = "rgb(255,255,255)";
    }

    if (!isError) {
        inputed_name.innerHTML = form.name.value;
        inputed_id_card.innerHTML = form.idCard.value;
        inputed_birthday.innerHTML = form.birthday.value;
        inputed_address.innerHTML = form.address.value;
        inputed_email.innerHTML = form.email.value;
    }
    else {
        alert("sdsd");
    }
}

function validateName() {
    var value = form.name.value
    var validRegex = /^[А-ЯІЇ][а-яії]+\s[А-ЯІЇ]\.[А-ЯІЇ]\.$/
    return value.match(validRegex);
}

function validateIdCard() {
    var value = form.idCard.value
    var validRegex = /^[A-ZА-ЯІЇЄ]{2} №\d{6}$/;
    return value.match(validRegex);
}

function validateBirthday() {
    var value = form.birthday.value
    var validRegex = /^\d{2}.\d{2}.\d{4}$/;
    return value.match(validRegex);
}

function validateAddress() {
    var value = form.address.value
    var validRegex = /^м.\d{6}$/;
    return value.match(validRegex);
}

function validateEmail() {
    var value = form.email.value
    var validRegex = /^\w+@\w+\.com$/;
    return value.match(validRegex);
}

// Task 2

const variant = 2;
const body = document.querySelector('body');

for (let r = 0; r < 6; r++) {
    const rowElement = document.createElement('tr');
    for (let c = 0; c < 6; c++) {
        const index = String(c + 1 + (r * 6));
        const dataElement = document.createElement('td');
        dataElement.innerHTML = index;
        dataElement.id = index;
        rowElement.appendChild(dataElement);
        body.appendChild(rowElement);
    }
}

const cell = document.getElementById(variant);

cell.onmouseover = () => {
    cell.style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)
        + ',' + Math.floor(Math.random() * 255) + ')';
};

cell.onmouseup = () => {
    e.style.background = document.getElementById('color').value;
}

cell.ondblclick = () => {
    var column = variant % 6;
    for (let i = 0; i < 6; i++) {
        const currentElement = document.getElementById(String(column + i * 6));
        currentElement.style.background = document.getElementById('color').value;
    }
    const current_ceil = document.getElementById(String(v));
    current_ceil.style.background = 'white';
}