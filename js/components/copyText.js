/**
 * La clase CopyText se encarga de manejar la funcionalidad de copiar el texto en el portapapeles.
 */
export default class CopyText {
    /**
     * El constructor de la clase CopyText inicializa el botón de copiar.
     */
    constructor() {
        this.copyTextButton = document.querySelector('.copy-btn');
    }

    /**
     * La función onClick asigna el evento onclick al botón de copiar, el cual copia el texto pasado por parámetro al portapapeles.
     * @param {string} textToCopy El texto que se va a copiar.
     */
    onClick(textToCopy) {
        this.copyTextButton.onclick = (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(textToCopy);
            window.alert('Texto copiado');
        }
    }
}
