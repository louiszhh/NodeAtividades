const express = require('express');
const dados = require('./dados.json'); 

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <p>Esta é uma página html.</p>
      </body>
    </html>
  `);
});

app.get('/api/data', (req, res) => {
  res.json(dados); 
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
