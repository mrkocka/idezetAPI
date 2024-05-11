const express = require('express');
const api = express();
let port = 8080;

const listeningStartedCallback = () => {
    console.log(`A szerver elindult. Port: ${port}`);
}
api.listen(port, listeningStartedCallback);
//features
// JSON üzenet
let idezetek = [
    {
        id: 1,
        idézet: "May the Force be with you.",
        film_címe: "Star Wars: Episode IV – A New Hope",
        év: 1997
    },
    {
        id: 2,
        feature: "I'll be back.",
        version: "The Terminator",
        year: 1984
    },
    {
        id: 3,
        feature: "To infinity and beyond!",
        version: "Film: Toy Story",
        year: 1995
    }
];
// Összes idézet lekérdezése
api.get('/api/idezetek', (req, res) => {
    res.send(idezetek);
});
// Paraméteres lekérdezés: a paraméter előtt kettőspont.
// Elérése kódból: req.params.id

api.get('/api/idezetek/:id', (req, res) => {
    const id = Number.parseInt(req.params.id, 10);
    console.log(`Kérés érkezett idezetek ${id}`);
    const idezet = idezetek.find(idezet => idezet.id === id);
    if (typeof idezet === 'undefined') {
        res.send([]);
    } else {
        res.send(idezet);
    }
});