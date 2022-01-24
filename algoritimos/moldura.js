
function moldura(largura, altura){
    let moldura = ''
    for(let i = 0; i < altura; i++){

        for (let j = 0; j < largura; j++){
            if ( (i === 0 && j === 0) || (i === altura - 1 && j === 0) ){
                moldura += '+'
            }else if ( (i === 0 && j === largura - 1) || (i === altura - 1 && j === largura - 1) ){
                moldura += '+'
            }
            else if( (i === 0 && j !== 0) || (i === altura - 1 && j !== 0) ){
                moldura += '-'
            }else if( (i !== 0 && j === 0) || (i !== 0 - 1 && j === largura - 1) ){
                moldura += '-'
            }else{
                moldura += ' '
            }
        }

        moldura += '\n'
    }
    return moldura
}

const resultado = moldura(9, 6)
console.log(resultado)