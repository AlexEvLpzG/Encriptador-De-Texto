export default class EncryptText {
    constructor() {
        this.inputTextValue = document.getElementById('textArea');
        this.buttonEncrypt = document.querySelector('.encrypt');
        this.regexAccentuation = /[áéíóúÁÉÍÓÚüÜñÑ]|[A-Z]/;
        this.regexCapitalLetters = /[A-Z]/;
    }

    onClick( callback ) {
        this.buttonEncrypt.onclick = (e) => {
            e.preventDefault();
            if (this.validateInputText(this.inputTextValue.value)) {
                this.encryptText(this.inputTextValue.value);
                callback(this.inputTextValue.value);
            }
        }
    }

    validateInputText(text) {
        if (text.trim() === "") {
            console.log('Error el texto no puede ir vacio');
            return false;
        }

        if (this.regexCapitalLetters.test(text)) {
            console.log('Error el texto ingresado tiene letras mayusculas');
            return false;
        }

        if (this.regexAccentuation.test(text)) {
            console.log('Error tu texto contiene un signo de asentación');
            return false;
        }
        
        return true;
    }


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