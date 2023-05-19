const db = require('./db.json')
let globalId = 2

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    
    getAllCompliments: (req, res) => {
        res.status(200).send(db)
        // console.log(db)
    },


    createCompliment: (req, res) => {

        let newUserCompliment = {
            id: globalId,
            message: req.body.message
        }

        db.push(newUserCompliment)
        globalId++

        res.status(200).send(newUserCompliment)
    },

    deleteCompliment: (req, res) => {
        const {id} = req.params;

        let index = db.findIndex((db) => db.id === +id)
        console.log(db[index])

        db.splice(index, 1)

        res.status(200).send(db)

    },

    editCompliment: (req, res) => {
        const {id} = req.params;

        let index = db.findIndex((db) => db.id === +id)
        let newInfo = db[index]

        db[index] = {
            id: newInfo.id,
            message: newInfo.message
        }

        console.log(db[index])
        res.status(200).send(db)
    }
}