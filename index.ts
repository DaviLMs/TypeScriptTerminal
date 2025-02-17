import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function iniciar(): void {
    console.log('Iniciando conversa...');

    rl.question('Digite seu nome: ', (nome: string) => {
        console.log(`Olá, ${nome}! Bem-vindo ao meu chat.`);

        rl.question('Digite seu sobrenome: ', (sobrenome: string) => {
            console.log(`Seu nome é ${nome} ${sobrenome}.`);

            rl.question('Gostaria de ver uma lista de comandos? (s/n): ', (resposta: string) => {
                if (resposta.toLowerCase() === 's') {
                    console.log('Comandos disponíveis: /ajuda, /sair, /sobre, /soma, /subtracao');
                }

                rl.question('Digite um comando: ', (comando: string) => {
                    switch (comando.toLowerCase()) {
                        case '/ajuda':
                            console.log('Comandos disponíveis: /ajuda, /sair, /sobre, /soma, /subtracao');
                            break;
                        
                        case '/sair':
                            console.log('Saindo do chat...');
                            rl.close(); 
                            break;

                        case '/sobre':
                            console.log('Aplicação feita pelo Davi Lamarca');
                            break;
                        
                        case '/soma':
                            rl.question('Digite o Primeiro número: ', (num1: string) => {
                                rl.question('Digite o Segundo número: ', (num2: string) => {
                                    const resultadoSoma = Number(num1) + Number(num2);
                                    if (!isNaN(resultadoSoma)) {
                                        console.log(`Resultado da soma: ${resultadoSoma}`);
                                    } else {
                                        console.log('Por favor, insira números válidos.');
                                    }
                                });
                            });
                            break;
                        
                        case '/subtracao':
                            rl.question('Digite o primeiro número: ', (num1: string) => {
                                rl.question('Digite o segundo número: ', (num2: string) => {
                                    const resultadoSubtracao = Number(num1) - Number(num2);
                                    if (!isNaN(resultadoSubtracao)) {
                                        console.log(`Resultado da subtração: ${resultadoSubtracao}`);
                                    } else {
                                        console.log('Por favor, insira números válidos.');
                                    }
                                });
                            });
                            break;
                        
                        default:
                            console.log('Comando não encontrado.');
                            break;
                    }
                });
            });
        });
    });
}

iniciar();
