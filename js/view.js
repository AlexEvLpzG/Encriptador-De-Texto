import CopyText from './components/copyText.js';
import DecryptText from './components/decryptText.js';
import EncryptText from './components/encryptText.js';

export default class View {
    constructor() {
        this.model = null;
        this.encryptTextForm = new EncryptText();
        this.decryptTextForm = new DecryptText();
        this.copyText = new CopyText();

        this.containerResult = document.querySelector('.container_result');
        this.textAreaResult = document.querySelector('#resultTextArea');
        this.cardInfo = document.querySelector('.card__info');

        this.encryptTextForm.onClick((text) => this.model.setText(text));
        this.decryptTextForm.onClick((text) => this.model.setText(text));
    }

    setModel(model) {
        this.model = model;
    }

    drawText(inputText) {
        this.copyText.copyTextButton.style.display = 'block';
        this.cardInfo.style.display = 'none';
        this.textAreaResult.value = inputText;

        this.copyText.onClick(inputText);
    }
}