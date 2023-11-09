let lista = [];
var numeroMax = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function reiniciar(){
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


function verificarChute() {
    let chute = document.querySelector('input').value;
        
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', "Acertou");
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Parabéns, Você acertou em ${tentativas} ${palavraTentativas}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'Tente um número menor');
        } else {
            exibirTextoNaTela('p','Tente um número maior');
        }
        tentativas++
        limparCampo();
        
    }
    
}

function iniciaPrograma(){
    limparCampo();
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMax}`);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.0});
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let listaTamanho = lista.length;

    if (listaTamanho == numeroMax){
        lista = []
    }

    if (lista.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        lista.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

iniciaPrograma();
