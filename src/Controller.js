import Model from './Model';

class Controller {
    constructor() {
        this._model = new Model();
        this.check = null;
    }

    getMessage = () => this._model.getMessage();
    setMessage = message => this._model.setMessage(message);
    clearMessage = () => this._model.clearMessage();

    searchPerson = (data) => {
        const persons = this._model.getPersons();

        let status = false;

        persons.forEach(element =>{
            this.check = data.name === element.name && data.ip === element.ip;

            if (this.check === true) {
                status = this.check;
            }

        });

        return status;
    }
}

export default Controller;