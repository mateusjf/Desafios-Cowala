const axios = require('axios')

const db = []

module.exports = {
    async create(req, res){
        try {
            const { id, valorEnviado } = req.body

            const { data: { USDBRL } } = await axios('https://economia.awesomeapi.com.br/last/USD-BRL')
            //const valorConvertido = valorEnviado * data.bid
            console.log()
            
            const objeto = {
                id,
                moedaOriginal: USDBRL.codein,
                moedaConversao: USDBRL.code,
                valorEnviado,
                valorConvertido: valorEnviado * USDBRL.bid
                
            }

            db.push(objeto)
            res.status(201).json(objeto)
        } catch (e) {
            res.status(400).json(e.message)
        }
    },
    readAll(req, res){
        try {
            res.status(200).json(db)
        } catch (e) {
            res.status(400).json(e.message)
        }
    },
    readOne(req, res){
        try {
            const { id } = req.params
            const response = db.find(objeto => {
                return objeto.id == id
            })

            if (!response) throw new Error('Item não encontrado')

            res.status(200).json(response)

        } catch (e) {
            res.status(404).json(e.message)
        }
    },
    delete(req, res){
        try {
            const { id } = req.body

            const item = db.find(objeto => {
                return objeto.id == id
            })

            if (!item) throw new Error('Item não encontrado')

            const index = db.indexOf(item)
            db.splice(index, 1)

            const response = {
                mensagem: "Item removido"
            }

            res.status(201).json(response)
        } catch (e) {
            res.status(404).json(e.message)
        }
    }
}