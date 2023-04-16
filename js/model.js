export default class Model {
    constructor() {
        this.view = null;
        this.text = '';
    }

    setView(view) {
        this.view = view;
    }

    setValue(textInputValue) {
        this.text = textInputValue;
    }
}