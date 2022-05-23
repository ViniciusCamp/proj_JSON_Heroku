import { Router } from 'express'
import { Person } from '@src/modals/person';

const dados = require("./db.json")

const router = Router();

type RequestBody = {
    id: Number
    name: string,
    age: number,
    ra: string,
    materia: string
}

router.get('/', (req, res) => {
    res.json(dados)
});

router.post('/', (req, res) => {
    const body = req.body as RequestBody
    const newPerson : Person = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        ra: req.body.ra,
        materia: req.body.materia
    };
    dados.push(newPerson)
    res.status(201).json(newPerson)
});

router.put('/id/:id', (req, res) => {
    const body = req.body as RequestBody
    const newPerson : Person = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        ra: req.body.ra,
        materia: req.body.materia
    };
    dados.push(newPerson)
    res.status(201).json(newPerson)
});


export default router