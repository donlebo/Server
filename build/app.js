"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const array_film_1 = require("array_film");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
const films = (0, array_film_1.getFilms)();
console.log('films', films);
app.get('/lists', (req, res) => {
    res.json(films);
});
app.get('/actor', (req, res) => {
    if (req.query.actor !== undefined) {
        const actor = films.filter(getFilms => getFilms.name == req.query.actor);
        //let index = actor.findIndex(item => item.name === req.query.name);
        res.json(actor); //[index]);
    }
    else {
        res.json(films);
    }
});
app.get('/films/:id', (req, res) => {
    const film = films.find(films => films.id === req.params.id);
    res.json(film);
});
app.delete('/films/:id', (req, res) => {
    console.log('films: ', films);
    let index = films.findIndex(item => item.id === req.params.id);
    let newfilm = films.splice(index, 1);
    res.json(newfilm[0]);
});
app.post('/films', (req, res) => {
    films.push(Object.assign({}, req.body));
    res.json(films);
});
app.listen(3001);
