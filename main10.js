/*

9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

*/

alert("Vamos verificar se esse número é Impar!")

let n1 = prompt("Favor informe um número: ")

n1 = Number(n1)

let parImpar = n1 % 3 === 0 ? "é Impar!" : "não é Impar!"

alert(`O resultado ${parImpar}`)