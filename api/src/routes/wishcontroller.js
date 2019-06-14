const router = require('express').Router()
const Wish = require('../db/wish')

router.get('/getwishes', function(req, res) {
    Wish.find().then(wish => {
        if(wish && wish.length === 0) {
            return res.status(200).send({
                message: "No wishes found."
            })
        }
        res.status(200).json(wish)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error getting wishes."
        })
    })
  })

router.get('/findwish/:value', function(req, res) {
    const query = {$or: [
        {firstName: {$regex: req.params.value, $options: 'i'}},
        {hometown: {$regex: req.params.value, $options: 'i'}}
    ]}
    Wish.find(query).then(wish => {
        if(wish && wish.length === 0) {
            return res.status(200).send({
                message: "No wishes found for the search value"
            })
        }
        res.status(200).json(wish)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error searching wishes."
        })
    })
  })

router.post('/createwish', function(req, res) {
    const wish = new Wish({
        firstName: req.body.firstName,
        age: req.body.age,
        hometown: req.body.hometown,
        illness: req.body.illness,
        wishType: req.body.wishType,
        wishDetail: req.body.wishDetail
    })
    wish.save().then(result => {
        res.status(201).send({
            message: "Your wish was saved successfully."
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while creating wishes."
        })
    })
})

router.delete('/deletewish/:id', function(req, res) {
    Wish.findByIdAndRemove(req.params.id)
    .then(wish => {
        if(!wish) {
            return res.status(404).send({
                message: "Wish not found with id " + req.params.id
            })
        }
        res.status(200).send({
            message: "Wish deleted successfully!"
        })
    })
    .catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Wish not found with id " + req.params.id
            })                
        }
        return res.status(500).send({
            message: "Could not delete wish with id " + req.params.id
        })
    })
  })

module.exports = router