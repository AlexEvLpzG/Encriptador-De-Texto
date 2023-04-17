/**
* La clase Model representa la lógica del negocio y los datos del programa.
* @class Model
* @property {Object} view El objeto view es una referencia a la vista.
* @property {string} text La cadena de texto que se ingresa en el área de texto.
*/

export default class Model {

    /**
     * Constructor de la clase Model
     */
    constructor() {
        this.view = null;
        this.text = '';
    }

    /**
     * Establece la vista
     * @param {Object} view - Referencia al objeto de vista
     */
    setView(view) {
        this.view = view;
    }

    /**
     * Establece la cadena de texto
     * @param {string} textInputValue - Valor de la cadena de texto ingresada
     */
    setText(textInputValue) {
        this.text = textInputValue;
        this.view.drawText(this.text);
    }
}