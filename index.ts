import axios from 'axios';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    console.log('/ajuda, /sair, /sobre, /soma, /subtracao, /vezes, /for, /horario, /clear, /produts, /users, /usersfor');
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
                forzinho();
                break;
            case '/horario':
                horario();
                break;
            case '/clear':
                console.clear();
                processarComando();
                break;
            case '/users':
                ApiUsers();
                processarComando();
                break;
            case '/produts': 
                apiProduts(); 
                break;
            case '/todos': 
                apiTodos()
                processarComando()
                break
            case '/usersfor':
                algoritimo()
                break
            default:
                console.log('Comando não encontrado.');
                processarComando();
                break;
        }
    });
}


function forzinho() {
    rl.question('Digite um número: ', (resposta: string) => {
        const numero = Number(resposta);

        if (numero > 10000) {
            console.log('Número muito longo, sujeito a travamento.');
            rl.close();
        } else {
            for (let i = 0; i < numero; i++) {
                console.log(i);
            }
            processarComando()
        }
    });
}

function algoritimo() {
    for (let i = 0; i < 100; i++){
        setTimeout(() => {
            console.clear()
            axios.get('https://dummyjson.com/users').then(resposta => {
                const users = resposta.data.users;
                console.log('Lista de usuários:');
                users.forEach((user: any, index: number) => {
                    console.log(`${index + 1}. ${user.firstName} ${user.lastName} - ${user.email}`);
                });
                console.log("\x1b[31m---------Atualizando pessoas a cada 10 segundos!---------\x1b[0m");
                processarComando();
            }).catch(error => {
                console.log('Erro ao obter dados dos usuários:', error.message);
                processarComando();
            });
        }, i  * 10000)
    }
}

function horario() {
    const data = new Date().getHours()
    console.log(data);
    if (data < 12) {
        console.log('Bom dia');
    } else if (data < 18) {
        console.log("Boa tarde");
    } else {
        console.log("Boa noite");
    }
    processarComando()
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

function ApiUsers() {
    axios.get('https://dummyjson.com/users').then(resposta => {
        const users = resposta.data.users;
        console.log('Lista de usuários:');
        users.forEach((user: any, index: number) => {
            console.log(`${index + 1}. ${user.firstName} ${user.lastName} - ${user.email}`);
        });
        processarComando();
    }).catch(error => {
        console.log('Erro ao obter dados dos usuários:', error.message);
        processarComando();
    });
}

function apiProduts() {
    axios.get('https://dummyjson.com/products').then(resposta => {
        const products = resposta.data.products;
        console.log('Lista de produtos:');
        products.forEach((product: any, index: number) => {
            console.log(`${index + 1}. ${product.title} - ${product.price} USD`);
        });
        processarComando();
    }).catch(error => {
        console.log('Erro ao obter dados dos produtos:', error.message);
        processarComando();
    });
}

function apiTodos() {
    axios.get('https://dummyjson.com/comments').then(response => {
        const todos = response.data
        console.log(todos);
    })
}
exibirMenu();

