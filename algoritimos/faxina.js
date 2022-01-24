let obj = {"fizz": "buzz", "foo": null, "bar": 42}

function faxina(obj){
    const novoObjeto = {}
    Object.keys(obj).forEach(campo => {
        if (obj[campo]) novoObjeto[campo] = obj[campo]
    })

    return novoObjeto
}

let resultado = faxina(obj)
console.log(resultado)