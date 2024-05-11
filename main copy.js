const express = require('express');
const api = express();
let port = 3000;

const listeningStartedCallback = () => {
    console.log(`A szerver elindult. Port: ${port}`);
}
api.listen(port, listeningStartedCallback);


// Összes idézet lekérdezése
api.get('/home', (req, res) => {
    res.send(`
        <html>        
          <head>            
           <title>Hello, Node!</title>
          </head>        
          <body>
            <h1>Hello, Node!</h1>
          </body>
        </html>    `);
});
