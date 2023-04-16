import EncryptText from './components/encryptText.js';

export default class View {
    constructor() {
        this.model = null;
        this.encryptTextForm = new EncryptText();

        this.encryptTextForm.onClick((text) => this.encryptText(text));
    }

    setModel(model) {
        this.model = model;
    }

    encryptText(textInputValue) {
        this.model.setValue(textInputValue);
    }
}