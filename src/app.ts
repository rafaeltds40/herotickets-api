import express, { Application } from 'express';
import { connect } from './infra/database';
import { errorMiddleware } from './middlewares/error.middleware';
import { EventRoutes } from './routs/event.routes';

class App {

    public app: Application;
    private eventRoutes = new EventRoutes();

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
        this.app.use('/events', this.eventRoutes.router);
    }

    interceptionError() {
        this.app.use(errorMiddleware);
    };

    listen() {
        this.app.listen(3575, ()=>{
            console.log('server is running');
        })
    };
}

export {App};