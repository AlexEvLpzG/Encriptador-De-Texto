export default class CopyText {
    constructor() {
        this.copyTextButton = document.querySelector('.copy-btn');
    }

    onClick(textToCopy) {
        this.copyTextButton.onclick = (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(textToCopy);
        }
    }
}