/**
 * La clase DecryptText se encarga de manejar la funcionalidad de desencriptar el texto ingresado.
 */
export default class DecryptText {
    /**
     * El constructor de la clase DecryptText inicializa los elementos HTML necesarios.
     */
    constructor() {
        this.inputTextValue = document.getElementById('textArea');
        this.buttonDecrypt = document.querySelector('.decrypt');
        this.regexAccentuation = /[áéíóúÁÉÍÓÚüÜñÑ]|[A-Z]/;
        this.regexCapitalLetters = /[A-Z]/;
    }

     /**
     * La función onClick asigna el evento onclick al botón de desencriptar.
     * @param {function} callback La función que se ejecutará cuando se desencripte el texto.
     */
    onClick(callback) {
        this.buttonDecrypt.onclick = (e) => {
            e.preventDefault();
            if (this.validateInputText(this.inputTextValue.value)) {
                callback(this.decryptText(this.inputTextValue.value));
            }
        }
    }

    /**
     * La función validateInputText valida el texto ingresado por el usuario.
     * @param {string} text El texto ingresado por el usuario.
     * @returns {boolean} Retorna verdadero si el texto es válido y falso si no lo es.
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
     * La función decryptText desencripta el texto ingresado por el usuario.
     * @param {string} text El texto encriptado ingresado por el usuario.
     * @returns {string} El texto desencriptado.
     */
    decryptText(text) {
        const letterChanges = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u',
        }

        let decryptedTextArray = [];
        const textLength = text.length;
        for (let i = 0; i < textLength; ) {
            const [key, value] = Object.entries(letterChanges).find(([key, value]) => text.substr(i).startsWith(key)) || [];
            if (key) {
              decryptedTextArray.push(value);
              i += key.length;
            } else {
              decryptedTextArray.push(text[i]);
              i++;
            }
        }
           
        return decryptedTextArray.join('');
    }
}