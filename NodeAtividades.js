const http = require('http');
const gerarNumeroAleatorio = require('./utils/utils'); 

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Bem-vindo!');
  } else if (req.url === '/sobre') {
    res.end('Sobre: Nome: Luisinho Fotocopia Idade: 18 Hobbies: Ser feliz');
  } else if (req.url === '/contato') {
    res.end('Contato: Numero: (42)998352910 Fixo para contato: (42)3446-1612');
  } else if (req.url === '/numero') {
    const numeroAleatorio = gerarNumeroAleatorio();
    res.end(`Número: ${numeroAleatorio}`);
  } else if (req.url.startsWith('/saudacao/')) {
    const nome = req.url.split('/')[2];
    if (nome) {
      const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);
      res.end(`Oi piazinho, ${nomeFormatado}!`);
    } else {
      res.end('Olá!');
    }
  } else {
    res.writeHead(404);
    res.end('Página não encontrada');
  }
}).listen(3000, () => {
  console.log(`Servidor rodando em 3000`);
});
