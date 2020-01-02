import Model from './Model';

class Controller {
    constructor() {
        this._model = new Model();
    }

    getMessage = () => this._model.getMessage();
    setMessage = message => this._model.setMessage(message);
    clearMessage = () => this._model.clearMessage();
}

export default Controller;