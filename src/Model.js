class Model {
    constructor() {
        this._messages = [];
        this._persons = [
            {name: 'Vanya', ip: '178.54.185.182' },
            {name: 'Musa', ip: '172.16.183.210'},
            {name: 'Ivan', ip: '178.54.185.182' },
            {name: 'Musa', ip: '5.197.254.117'},
            {name: 'Musa', ip: '172.16.183.210'},
            {name: 'Ivan', ip: '178.54.185.182' },
        ];

    }

    setMessage = message => this._messages.push(message);

    clearMessage = () => this._messages = [];

    getMessage = () => [...this._messages];

    getPersons = () => this._persons;
}

export default Model;