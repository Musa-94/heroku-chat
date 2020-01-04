import path from 'path';
import express from 'express';
import Controller from './Controller';

class App {
    constructor() {
        this._controller = new Controller();
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../public')));
        
        this._app.get('/message', this.onGet);
        this._app.post('/message', this.onPost);
        this._app.delete('/message', this.onDelete);
    }

    onGet = (request, response) => {
        const data = this._controller.getMessage();
        
        response.end(JSON.stringify(data));
    }
    

    onPost = (request, response) => {
        const { body } = request;
        this._controller.setMessage(body);          
        
        response.end();
    }

    onDelete = (request, response) => {
        this._controller.clearMessage();
        
        response.end();
    }

    getApp = () => this._app;
}

export default App;