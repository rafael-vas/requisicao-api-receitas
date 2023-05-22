const https = require('https');

function procurarReceitas(query) {
  const apiKey = '52c7035d0e6240c997c63964bb3c3544';
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;

  https.get(url, (res) => {
    let dados = '';

    res.on('data', (chunk) => {
      dados += chunk;
    });

    res.on('end', () => {
      const receitas = JSON.parse(dados);
      console.log("Título de receita: " + receitas.results[0].title);
      console.log("URL da Imagem: " + receitas.results[0].image);
    });
  }).on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });
}

procurarReceitas('apple');