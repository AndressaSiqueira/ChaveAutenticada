const express = require('express');
const _adminstration = require('./routes/adminstration');
const cors = require('cors');

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {

        this.express.use(express.json());
        this.express.use(cors());
        }

    routes() {
        this.express.use(_adminstration);
    }


}

module.exports = new AppController().express;
