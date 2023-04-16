export default class DecryptText {
    constructor() {
        this.inputTextValue = document.getElementById('textArea');
        this.buttonDecrypt = document.querySelector('.decrypt');
        this.regexAccentuation = /[áéíóúÁÉÍÓÚüÜñÑ]|[A-Z]/;
        this.regexCapitalLetters = /[A-Z]/;
    }

    onClick(callback) {
        this.buttonDecrypt.onclick = (e) => {
            e.preventDefault();
            if (this.validateInputText(this.inputTextValue.value)) {
                callback(this.decryptText(this.inputTextValue.value));
            }
        }
    }

    validateInputText(text) {
        if (text.trim() === "") {
            console.log('Error el texto no puede ir vacío');
            return false;
        }

        if (this.regexCapitalLetters.test(text)) {
            console.log('Error el texto ingresado tiene letras mayúsculas');
            return false;
        }

        if (this.regexAccentuation.test(text)) {
            console.log('Error tu texto contiene un signo de acentuación');
            return false;
        }
        
        return true;
    }


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