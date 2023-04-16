import DecryptText from './components/decryptText.js';
import EncryptText from './components/encryptText.js';

export default class View {
    constructor() {
        this.model = null;
        this.encryptTextForm = new EncryptText();
        this.decryptTextForm = new DecryptText();
        this.containerResult = document.querySelector('.container_result');
        this.cardInfo = document.querySelector('.card__info');

        this.encryptTextForm.onClick((text) => this.model.setText(text));
        this.decryptTextForm.onClick((text) => this.model.setText(text));
    }

    setModel(model) {
        this.model = model;
    }

    drawText(inputText) {
        this.cardInfo.style.display = 'none';
    
        const oldResultTextDiv = document.querySelector('.result-text');
        if (oldResultTextDiv) {
            oldResultTextDiv.remove();
        }
    
        const resultTextDiv = document.createElement('div');
        resultTextDiv.classList.add('result-text');
        const encryptedTextParagraph = document.createElement('p');
        encryptedTextParagraph.innerHTML = inputText;
        resultTextDiv.appendChild(encryptedTextParagraph);
    
        this.containerResult.appendChild(resultTextDiv);
    }
}