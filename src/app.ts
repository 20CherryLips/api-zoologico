import express from "express";
import cors from 'cors';
import { Reptil } from "./model/Reptil";
import { Mamifero } from "./model/Mamifero";
import { Ave } from "./model/Ave";

const server = express();
const port = 3500;

server.use(express.json());
server.use(cors());

server.get('/', (req,res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'Masculino', 10);
    let reptil: Reptil = new Reptil('Lagarto',2, 'Femea', 'Cicloides');
    let  mamifero: Mamifero = new Mamifero('Doberman', 'cachorro', 102, 'Femea');
    res.json([ave, reptil, mamifero ]);
    //res.json('Olá mundo!!');
})

server.post('/ave', (req,res) =>{
    const {nome, idade, genero, envergadura} = req.body;
    let ave: Ave = new Ave (nome, idade, genero, envergadura);
    res.json (["Está é a nova ave do zoológico:", ave]);
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})

