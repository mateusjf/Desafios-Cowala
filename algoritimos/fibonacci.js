function fibonnaci(n){

    const sequencia = []

    let proximo = 1
    let anterior = 0
    let atual = 0

    for (let i = 0; i < n; i++){
        sequencia.push(atual)

        anterior = atual
        atual = proximo

        if (atual !== 0) proximo = atual + anterior
    }

    return sequencia
}

const resultado = fibonnaci(6)
console.log(resultado)