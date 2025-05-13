const CreateLogoScreen = (imgLink, father) => {
    const container = document.createElement('div');
    container.classList.add('container');
    const img = document.createElement('img');
    img.setAttribute('src', imgLink);
    img.classList.add('img-logo-screen');
    container.appendChild(img);
    document.querySelector(father).appendChild(container);
}

const CreateTitle = (title, style, father) => {

    const ttl = document.createElement('h1');
    ttl.innerText = title;
    ttl.classList.add(style);
    document.querySelector(father).appendChild(ttl);
}

const CreateDataBox = (style, father) => {
    const dataBox = document.createElement('div');
    dataBox.classList.add(style);
    document.querySelector(father).appendChild(dataBox);

}

const CreateLabel = (text, style, father) => {
    const label = document.createElement('label');
    label.classList.add(style);
    label.innerText = text;
    document.querySelector(father).appendChild(label);
}

const CreateBigNumbers = (value, style, father) => {
    const bigNumber = document.createElement('div');
    bigNumber.innerText = value;
    bigNumber.classList.add(style);
    document.querySelector(father).appendChild(bigNumber);
}

const CreateButton = (value, style, father) => {
    const btn = document.createElement('button');
    btn.classList.add(style);
    btn.innerText = value;
    document.querySelector(father).appendChild(btn);
}

CreateTitle('Registro de Ponto', 'title', '.container');
CreateTitle('Dashboard', 'sub-title', '.container');
CreateDataBox('data-box-grid', '.container');
CreateLabel('Saldo mês', 'label', '.data-box-grid');
CreateLabel('Saldo total', 'label', '.data-box-grid');
CreateBigNumbers(value = '05:30h', style = 'positive', '.data-box-grid');
CreateBigNumbers(value = '11:40h', style = 'negative', '.data-box-grid');
