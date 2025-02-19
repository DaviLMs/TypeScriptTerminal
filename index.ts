import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function solicitarNome() {
    rl.question('Digite seu nome: ', (nome) => {
        rl.question('Digite seu sobrenome: ', (sobrenome) => {
            console.clear();
            console.log(`Olá, ${nome} ${sobrenome}! Bem-vindo ao meu chat.`);
            exibirMenu();
        });
    });
}

function exibirMenu() {
    console.clear();
    rl.question('Gostaria de ver uma lista de comandos? (s/n): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
            listarComandos();
        }
        processarComando();
    });
}

function listarComandos() {
    console.log('Comandos disponíveis: /ajuda, /sair, /sobre, /soma, /subtracao, /vezes, /for');
}

function processarComando() {
    rl.question('Digite um comando: ', (comando) => {
        switch (comando.toLowerCase()) {
            case '/ajuda':
                listarComandos();
                processarComando();
                break;

            case '/sair':
                console.clear();
                console.log('Saindo do chat...');
                rl.close();
                break;

            case '/sobre':
                console.clear();
                console.log('Aplicação feita pelo Davi Lamarca');
                processarComando();
                break;

            case '/soma':
                calcularOperacao('soma', (a, b) => a + b);
                break;

            case '/subtracao':
                calcularOperacao('subtração', (a, b) => a - b);
                break;

            case '/vezes':
                calcularOperacao('multiplicação', (a, b) => a * b);
                break;
            case '/for': 
                forzinho()
                break
            default:
                console.clear();
                console.log('Comando não encontrado.');
                processarComando();
                break;
        }
    });
}

function forzinho() {
    rl.question('Digite um número: ', (resposta: string) => {
        const numero = Number(resposta);
        
        if (numero > 1000) { 
            console.log('Número muito longo, sujeito a travamento.');
            rl.close();
        } else {
            for (let i = 0; i < numero; i++) {
                console.log(i);
            }
            rl.close();
        }
    });
}


function calcularOperacao(nome: string, operacao: (a: number, b: number) => number) {
    console.clear();
    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            console.clear();
            const n1 = Number(num1);
            const n2 = Number(num2);

            if (isNaN(n1) || isNaN(n2)) {
                console.log('Por favor, insira números válidos.');
            } else {
                console.log(`Resultado da ${nome}: ${operacao(n1, n2)}`);
            }
            processarComando();
        });
    });
}

solicitarNome();
