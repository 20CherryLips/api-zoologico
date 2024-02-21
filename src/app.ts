import express from "express";
import cors from 'cors';
import { Mamifero } from "./model/Mamifero";
import { Ave } from "./model/Ave";
import { Habitat } from "./model/Habitat";
import { Atracao } from "./model/Atracao";
import { Zoologico } from "./model/Zoologico";
import { DatabaseModel } from "./model/DatabaseModel";
import { Reptil } from "./model/Reptil";

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

server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado!');
});

server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criada!');
});

server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoo= new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoológico criado!');
});

server.get('/reptil', async (req, res) => {
    const repteis = await Reptil.listarRepteis();

    res.status(200).json(repteis);
})

new DatabaseModel().testeConexao().then((resbd) => {
    if(resbd) {
        server.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        })
    } else {
        console.log('Não foi possível conectar ao banco de dados');
    }
})
