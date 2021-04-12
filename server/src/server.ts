import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// http://localhost:3333/users
// http://localhost:3333/contacts


//GET --> Buscar ou Listar uma informação
//POST --> Criar alguma nova informação dentro do oBackend
//PUT --> atualizar uam infomação existente
//DELETE --> deleter uma informação

// app.get('/users', (req, res) => {
//     const users = [
//         {name: 'Daniel', age: 22},
//         {name: 'Dêmiles', age: 17},
//     ]

//     return res.json(users);
// });

// Corpo (Request Body): Dados para criação ou atualização de registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtors, ordenação




app.listen(3333);
//localhost:3333/users