import CopyText from './components/copyText.js';
import DecryptText from './components/decryptText.js';
import EncryptText from './components/encryptText.js';

/**
 * Clase View.
 *
 * Esta clase representa la vista de la aplicación y se encarga de manejar la interfaz de usuario.
 */
export default class View {

    /**
     * Constructor de la clase View.
     */
    constructor() {
        this.model = null;
        this.encryptTextForm = new EncryptText();
        this.decryptTextForm = new DecryptText();
        this.copyText = new CopyText();

        this.containerResult = document.querySelector('.container_result');
        this.containerTextResult = document.querySelector('.result-text');
        this.textAreaResult = document.querySelector('#resultTextArea');
        this.cardInfo = document.querySelector('.card__info');

        // Asigna las funciones callbacks para los eventos click de los formularios de encriptación y desencriptación.
        this.encryptTextForm.onClick((text) => this.model.setText(text));
        this.decryptTextForm.onClick((text) => this.model.setText(text));
    }

    /**
     * Asigna el modelo de la aplicación a la vista.
     *
     * @param {Model} model - El modelo de la aplicación.
     */
    setModel(model) {
        this.model = model;
    }

     /**
     * Muestra el texto en la vista.
     *
     * @param {string} inputText - El texto a mostrar en la vista.
     */
    drawText(inputText) {
        this.cardInfo.style.display = 'none';
        this.copyText.copyTextButton.style.display = 'block';
        this.containerTextResult.style.display = 'block';
        this.textAreaResult.value = inputText;

        this.copyText.onClick(inputText);
    }
}