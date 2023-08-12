import express, { Application } from 'express';
import { connect } from './infra/database';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        connect();
    }

    middlewaresInitialize() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:true }));
    };

    initializeRoutes() {
        // this.app.use('/')
    }

    interceptionError() {
        // this.app.use
    };

    listen() {
        this.app.listen(3575, ()=>{
            console.log('server is running');
        })
    };
}

export {App};