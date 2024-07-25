const prompt = require ("prompt-sync")();

const estudios = [];

const validarIndice = indice => indice >= 0 && indice < jogos.length;

const modelo = () => {
    const nome = prompt('Nome do estudio: ');
    const paisOrigem = prompt('País de origem do estúdio: ');
    const anoCriacao = prompt('Ano de criação do estúdio: ');
        
    if (
        nome != "" &&
        paisOrigem != "" &&
        anoCriacao >= 1962 && anoCriacao <= 2024
    ) {
        return {nome, paisOrigem, anoCriacao, }
    } else {
        console.log('Dados inválidos.');
    }
};

const criar = () => {
    const estudio = modelo()
    if (estudio != undefined){
        estudios.push(estudio)
        console.log('Estudio cadastrado com sucesso!');
    }
};

const listar = () => {
    if (estudios.length == 0){
        console.log("Nenhum estudio cadastrado.");
        return false
    } else {
        estudios.forEach((estudio, indice) => {
            console.log(`
            ${indice + 1}. 
            Nome: ${estudio.nome}
            Ano de Lançamento: ${estudio.paisOrigem}
            Duração: ${estudio.anoCriacao}
            `)
        })
        return true
    }
};

const atualizar = () => {
    listar()
    if (!listar()){
        return
    }

    const indice = prompt('Qual estudio deseja atualizar? ') - 1;
    const estudio = modelo()

    if (estudio != undefined && validarIndice(indice)){
        estudios[indice] = estudio
        console.log('Estudio atualizado com sucesso!');
    } else {
        console.log('Estudio não atualizado.')
    }
};

const deletar = () => {
    listar()
    if (!listar()){
        return
    }

    const indice = prompt('Qual estudio deseja remover? ') - 1;

   if (validarIndice(indice)){
    estudios.splice(indice, 1)
    console.log('Estudio removido com sucesso.');
   } else {
    console.log('Falha na remoção.');
   }
};
