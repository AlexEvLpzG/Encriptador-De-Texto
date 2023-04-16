import EncryptText from './components/encryptText.js';

export default class View {
    constructor() {
        this.model = null;
        this.encryptTextForm = new EncryptText();
        this.containerResult = document.querySelector('.container_result');
        this.cardInfo = document.querySelector('.card__info');

        this.encryptTextForm.onClick((text) => this.encryptText(text));
    }

    setModel(model) {
        this.model = model;
    }

    encryptText(textInputValue) {
        this.model.setValue(textInputValue);
    }

    drawText(encryptedText) {
        this.cardInfo.style.display = 'none';
    
        // Eliminar el texto anterior si ya existe
        const oldEncryptedTextDiv = document.querySelector('.encrypted-text');
        if (oldEncryptedTextDiv) {
            oldEncryptedTextDiv.remove();
        }
    
        // Crear el nuevo elemento div y agregar el texto
        const encryptedTextDiv = document.createElement('div');
        encryptedTextDiv.classList.add('encrypted-text'); // Agregar una clase para identificar este elemento
        const encryptedTextParagraph = document.createElement('p');
        encryptedTextParagraph.innerHTML = encryptedText;
        encryptedTextDiv.appendChild(encryptedTextParagraph);
    
        this.containerResult.appendChild(encryptedTextDiv);
    }
}