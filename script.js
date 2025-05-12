const CreateLogoScreen = (imgLink, father) => {
    const container = document.createElement('div');
    container.classList.add('container');
    const img = document.createElement('img');
    img.setAttribute('src', imgLink);
    img.classList.add('img-logo-screen')
    container.appendChild(img);
    document.querySelector(father).appendChild(container);
}

const CreateButton = (value, style, father) => {
    const btn = document.createElement('button');
    btn.classList.add(style);
    btn.innerText = value;
    document.querySelector(father).appendChild(btn);
}

const CreateBudgetScreen = () => {
    
}

CreateButton('Testar', 'btn-1', '.container');
// CreateLogoScreen('https://drive.google.com/thumbnail?id=1Kt9O8YkbBMOT9F-h1-QvEhHXZngS6j3a', '.container');
