alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute //espaço para armazenar o valor do chute na linha 8

/* Enquanto chute for não igual (!=), ao número secreto */
while (chute != numeroSecreto ) {
    chute = prompt ('Escolha um número entre 1 e 10');
    /* Se o chute for igual au número secreto */
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

