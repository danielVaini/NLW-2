import db from '../database/connection';
import { Response, Request } from 'express';


export default class cadastroController{


    async create(req: Request, res: Response){
        const {
            email,
            senha,
        } = req.body;

        const trx = await db.transaction();

        const insertEmailAndSenha = () => {
            return{

                email,
                senha,
            }
        })

       await trx('cadastro').insert(insertEmailAndSenha)

       await trx.commit();

       return res.status(201).send();
    }   
}