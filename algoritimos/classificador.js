const json = [
    { souEu: false, responsavel: true, nome: 'Ainz Ooal Gown' },
    { souEu: false, responsavel: false, nome: 'Sebastian' },
    { souEu: false, responsavel: false, nome: 'Cocytus' },
    { souEu: false, responsavel: true, nome: 'Peroroncino'},

    { souEu: false, responsavel: true, nome: 'Naruto' },
    { souEu: false, responsavel: false, nome: 'Madara' },
    { souEu: false, responsavel: false, nome: 'Yamato'},
    { souEu: false, responsavel: false, nome: 'Konohamaru'},
    
    { souEu: false, responsavel: true, nome: 'Broly' },
    { souEu: false, responsavel: true, nome: 'Vegeta' },
    { souEu: false, responsavel: false, nome: 'Trunks'},
    { souEu: false, responsavel: true, nome: 'Gotenks'},

    { souEu: true, responsavel: false, nome: 'Finn, O Humano'},

    { souEu: false, responsavel: true, nome: 'Saitama'},
    { souEu: false, responsavel: false, nome: 'Genos'},
    { souEu: false, responsavel: false, nome: 'Tornado'},
    { souEu: false, responsavel: false, nome: 'Imperador Mendigo'}
]

function classificador(array){

    let voce = array.find(pessoa => {
        if (pessoa.souEu){
            let aux = pessoa
            let indice = array.indexOf(pessoa)
            array.splice(indice, 1)

            return aux
        }
    }) 

    let ordenado = array.sort( (primeiro, segundo) => {
        return (primeiro.nome > segundo.nome) ? 0 : (primeiro.nome > segundo.nome) ? 1 : -1
    })

    let responsaveis = ordenado.filter(pessoa => {
        return pessoa.responsavel
    })

    let normal = ordenado.filter(pessoa => {
        return !pessoa.responsavel
    })

    const final = responsaveis.concat(normal)
    final.unshift(voce)
    return final
}


let resultado = classificador(json)
console.log(resultado)
