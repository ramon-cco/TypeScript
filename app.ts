let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input1') as HTMLInputElement;

function adicionarNumero(num1:number, num2:number){
    return num1 + num2
}

if(button) {
    button.addEventListener('click', () => {
        if(input1 && input2){
            adicionarNumero(Number(input1.value), Number(input2.value))
        }
    });
}
