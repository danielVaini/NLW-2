import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/connectionsController';
import cadastroController from './controllers/CadastroController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

routes.post('/cadastro', cadastroController.create);

export default routes;