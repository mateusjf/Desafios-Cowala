db = []

module.exports = {
    create(req, res){
        try {
            const response = {
                id: req.body.id,
                item: req.body.item,
                preco: req.body.preco
            }

            db.push(response)
            res.status(201).json(response)

        } catch (e) {
            res.status(400).json({
                error: e.message
            })
        }
    },
    update(req, res){
        try {
            const { id, item, preco } = req.body

            const itemUpdate = db.find(objeto => {
                return objeto.id == id
            })

            if (!item) throw Error('Item não encontrado')

            itemUpdate.item = item
            itemUpdate.preco = preco

            res.status(201).json(itemUpdate)

        } catch (e) {
            res.status(404).json({
                error: e.message
            })
        }

    },
    readAll(req, res){
        try {
            res.status(200).json(db)
        } catch (e) {
            res.status(400).json({
                error: e.message
            })
        }
    },
    readOne(req, res){
        try {
            const {id} = req.params
            const response = db.find(objeto => {
                return objeto.id == id
            })

            if (!response) throw Error('Item não encontrado')

            res.status(200).json(response)
        } catch (e) {
            res.status(404).json({
                error: e.message
            })
        }
    },
    delete(req, res){
        try {
            const {id} = req.body
            const item = db.find(objeto => {
                return objeto.id == id
            })

            if (!item) throw Error('Item não encontrado')

            let index = db.indexOf(item)
            db.splice(index, 1)

            const response = {
                mensagem: 'Item removido',
            }

            res.status(201).json(response)

        } catch (e) {
            res.status(400).json({
                error: e.message
            })
        }
    }
}