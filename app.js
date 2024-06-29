let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirTextoInicial() {
    exibirTextoNaTela('h1', 'O Mentalista');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirTextoInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secretíssimo com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let maiorOuMenor = chute < numeroAleatorio ? 'maior' : 'menor';
        exibirTextoNaTela('p', `O número secretíssimo é ${maiorOuMenor}`);
        tentativas++;
        limparCampo();
    };
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroAleatorio);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    if(listaNumerosSorteados.length == numeroMaximo) {
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        console.log(listaNumerosSorteados);
        return numeroSorteado;
    }
}