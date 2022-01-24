const axios = require('axios')

const db = []

module.exports = {
    async create(req, res){
        try {
            const { id, valorEnviado } = req.body

            const api = await axios('https://economia.awesomeapi.com.br/last/USD-BRL')
            console.log(api)
        } catch (e) {
            
        }
    },
    readAll(req, res){

    },
    readOne(req, res){

    },
    delete(req, res){

    }
}