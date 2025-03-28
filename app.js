alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute //espaço para armazenar o valor do chute na linha 8
let tentativas = 1;

/* Enquanto chute for não igual (!=), ao número secreto */
while (chute != numeroSecreto ) {
    /* Se o chute for igual au número secreto */
    chute = prompt ('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        /* tentativas = tentativas +1; */
        tentativas++;
    }
}
if (tentativas > 1) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}

