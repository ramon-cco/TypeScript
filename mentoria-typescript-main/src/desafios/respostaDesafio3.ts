let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let totalDoSaldo = 0

limpaSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        totalDoSaldo += soma
        campoSaldo.innerHTML = totalDoSaldo.toString();
        limpaCampoSoma();
    }
}

function limpaCampoSoma() {
    soma.value = "";
}

function limpaSaldo() {
    if (campoSaldo) {
        totalDoSaldo = 0;
        campoSaldo.innerHTML = totalDoSaldo.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => { 
    limpaSaldo();
});
