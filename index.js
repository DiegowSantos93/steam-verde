const prompt = require("prompt-sync")();

const {criar, atualizar, listar, deletar} = require("./jogo.js");

while (true){
    console.log('Steam Verde\n1. Criar jogo\n2. Listar\n3. Atualizar\n4. Remover\n5. Sair')
    const opcao = parseInt(prompt('Escolha uma opção: '));

    switch (opcao) {
        case 1:
            criar()
            break;
        case 2:
            listar()
            break;
        case 3:
            atualizar()
            break;
        case 4:
            deletar()
            break
        case 5:
            console.log('Saindo do sistema, até mais!')
            process.exit()
        default:
            console.log('Opção inválida.')
            break;
    }
}