const numeroDesejado = Number(prompt("Insira o número desejado:"));
let mensagem = "";

for (let i = 0; i <= 10; i++)
{
    mensagem += `${numeroDesejado} * ${i} = ${numeroDesejado * i}\n`
}

alert(mensagem);