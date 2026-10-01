function somaImpares() {
    let soma = 0;

    for (let n = 1; n <= 500; n++) {
        if (n % 2 !== 0 && n % 3 === 0) {
            soma += n;
            console.log("Acumulado soma:", +soma);
            console.log(n);
        }
    }
}

function menorEMaiorAltura() {
    let alturas = [ 1.35, 1.60, 1.90, 1.89, 1.70, 1.36, 1.80, 1.65, 1.50, 1.55, 1.45, 2.10, 1.30, 1.22, 1.91];
    let menor= alturas[0];
    let maior= alturas[0];

    for (altura of alturas) {
        if(altura > maior){
            maior = altura;
            console.log(`incidencias de maior: ${maior}`);
        }
        if (altura < menor){
            menor=altura;
            console.log(`incidencia de menor: ${menor}`);
        }
    }
        alert(`A maior altura é ${maior}, e a menor é ${menor}`)
}

function somaImpares() {
    let soma = 0;

    for (let n = 1; n <= 500; n++) {
        if (n % 2 !== 0 && n % 3 === 0) {
            soma += n;
        }
    }
    alert(`A soma de todos os números ímpares que também são múltiplos de 3 é: ${soma}`);
}

function menorEMaiorAltura() {
    let alturas = [1.35, 1.60, 1.90, 2.10, 1.98, 2, 1.90, 1.55, 1.20, 1.93, 1.78, 1.80, 1.83, 1.60, 1.3];
    let menor = alturas[0];
    let maior = alturas[0];

    for (altura of alturas) {
        if (altura > maior) {
            maior = altura;
            console.log(`incidências de maior: ${maior}`);
        } 
        if (altura < menor) {
            menor = altura;
            console.log(`incidências de menor: ${menor}`);
        }
    }
    alert(`A maior altura é ${maior}, e a menor é ${menor}`);
}

function mediaAritmetica() {
    let soma = 0;
    let positivos = 0;
    let negativos = 0;
    let quantidade = 0;
    let valor = 10;

    while (valor >= -7) {
        console.log("valor: " + valor);
        soma += valor;
        console.log("soma: " + soma);
        quantidade++

        console.log(quantidade)

        if (valor > 0) {
            positivos++
        } else if (valor < 0) {
            negativos++
        }
        valor -= 1;
    }
    console.log(`
        Acumulado: ${soma}
        Média: ${(soma / quantidade).toFixed(2)}
        Percentual Positivo: ${(positivos * 100 / quantidade).toFixed(2)}
        Percentual Negativo: ${(negativos * 100 / quantidade).toFixed(2)}
        `)
}

function quantidadeNosIntervalos{

    
}