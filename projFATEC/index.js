const fs = require('fs');

const caminhoArquivo = './config.json';

fs.readFile(caminhoArquivo, 'utf8', (erro, dados) => {
  if (erro) {
    console.error('Erro ao ler o arquivo:', erro);
    return;
  }

  try {
    const config = JSON.parse(dados);

    const curso = config.atividade;
    const campus = config.campus;

    console.log(`Configuração carregada para o curso ${curso} no campus ${campus}`);
  } catch (e) {
    console.error('Erro ao processar o JSON:', e);
  }
});