import http from 'http';
import WebSocket from 'ws';
import App from './App';
import Controller from './Controller';

class WServer {
    constructor(port) {
        this._port = port;

        this._app = new App();
        this._server = http.createServer(null, this._app.getApp());
        this._webSocketServer = new WebSocket.Server({ server: this._server });
        this._clients = new Set();
        this._controller = new Controller();

        this._webSocketServer.on('connection', this.handleCon.bind(this));        
    }

    handleCon = ws => {
        this._clients.add(ws);

        ws.on('message', data => {
            data = JSON.parse(data);

            if(data.clear !== 'clear') {
                this._controller.setMessage(data);
            } else {
                this._controller.clearMessage();
            }

            let messageModel = this._controller.getMessage();

            for(let client of this._clients) {
                client.send(JSON.stringify(messageModel));
            }
        });
    }

    startServer = () => this._server.listen(this._port, console.log('SERVER HAS BEEN STARTED ON PORT:', this._port));
}

export default WServer;