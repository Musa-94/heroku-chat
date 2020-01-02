class Model {
    constructor() {
        this._messages = [];
    }

    setMessage = message => this._messages.push(message);

    clearMessage = () => this._messages = [];

    getMessage = () => this._messages;
}

export default Model;