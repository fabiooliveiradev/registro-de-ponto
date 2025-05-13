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

const CreateInput = (style, father) => {
    const input = document.createElement('input');
    input.classList.add(style);
    document.querySelector(father).appendChild(input);
}

const CreateTimeInput = (style, father) => {
    const timeInput = document.createElement('div');
    timeInput.classList.add(style);
    document.querySelector(father).appendChild(timeInput);
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
CreateTitle('Registrar ponto', 'sub-title', '.container');
CreateDataBox('data-box', '.container');
CreateLabel(text = 'Terça-feira, 13 de maio de 2025', 'label', '.data-box');
CreateTimeInput('time-input', '.data-box');
CreateTitle(title = 'Entrada', 'sub-title', '.time-input');
CreateInput('input', '.time-input');
CreateTitle(title = ':', 'sub-title', '.time-input');
CreateInput('input', '.time-input');
CreateTitle(title = 'h', 'sub-title', '.time-input');
CreateTitle(title = '', 'sub-title', '.time-input');
CreateButton('Resgistrar', 'btn', '.time-input');