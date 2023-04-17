/**
 * La clase EncryptText se encarga de manejar la funcionalidad de encriptar un texto.
 */
export default class EncryptText {

    /**
     * El constructor de la clase EncryptText inicializa los elementos HTML necesarios para encriptar el texto.
     */
    constructor() {
        this.inputTextValue = document.getElementById('textArea');
        this.buttonEncrypt = document.querySelector('.encrypt');
        this.regexAccentuation = /[áéíóúÁÉÍÓÚüÜñÑ]|[A-Z]/;
        this.regexCapitalLetters = /[A-Z]/;
    }

    /**
     * La función onClick asigna el evento onclick al botón de encriptar, el cual llama al callback pasado por parámetro con el texto encriptado.
     * @param {function} callback La función que se llamará cuando se encripte el texto.
     */
    onClick(callback) {
        this.buttonEncrypt.onclick = (e) => {
            e.preventDefault();
            if (this.validateInputText(this.inputTextValue.value)) {
                callback(this.encryptText(this.inputTextValue.value));
            }
        }
    }

    /**
     * La función validateInputText valida si el texto ingresado cumple con ciertos requisitos.
     * @param {string} text El texto a validar.
     * @returns {boolean} True si el texto es válido, false si no lo es.
     */
    validateInputText(text) {
        if (text.trim() === "") {
            window.alert('Error el texto no puede ir vacío');
            return false;
        }

        if (this.regexCapitalLetters.test(text)) {
            window.alert('Error el texto ingresado tiene letras mayúsculas');
            return false;
        }

        if (this.regexAccentuation.test(text)) {
            window.alert('Error tu texto contiene un signo de acentuación');
            return false;
        }
        
        return true;
    }


    /**
     * La función encryptText encripta un texto mediante una serie de reemplazos de letras definidos en la constante letterChanges.
     * @param {string} text El texto a encriptar.
     * @returns {string} El texto encriptado.
     */
    encryptText(text) {
        const letterChanges = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat',
        }

        let encryptedTextArray = [];
        for (let index = 0; index < text.length; index++) {
            if (letterChanges[text[index]] != undefined) {
                encryptedTextArray.push(letterChanges[text[index]]);
                continue;
            }
            encryptedTextArray.push(text[index]);
        }

        return encryptedTextArray.join('');
    }
}