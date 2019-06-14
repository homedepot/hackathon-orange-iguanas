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

router.get('/findbyid/:id', function(req, res) {
    Wish.findById(req.params.id).then(wish => {
        if(!wish) {
            return res.status(200).send({
                message: "No wishes found for given id"
            })
        }
        res.status(200).json(wish)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error finding wish."
        })
    })
  })

router.get('/findwish/:value', function(req, res) {
    var inputValue = req.params.value
    var dateformat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
    var query = {}
    if (inputValue && inputValue.match(dateformat)) {
        const dayAfter = new Date(inputValue).getTime() + 24 * 60 * 59 * 1000;
        query =  {$and: [ {date: {$gte: new Date(inputValue)}}, {date: {$lte: new Date(dayAfter)}}]}
    } else {
        query = {$or: [
            {firstName: {$regex: inputValue, $options: 'i'}},
            {hometown: {$regex: inputValue, $options: 'i'}}
        ]}
    }
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

router.get('/findwish/:dateFrom/to/:dateTo', function(req, res) {
    var inputDateFrom = req.params.dateFrom
    var inputDateTo = req.params.dateTo
    var dateformat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
    var query = {}
    if (inputDateFrom && inputDateTo && inputDateFrom.match(dateformat) && inputDateTo.match(dateformat)) {
        query =  {$and: [ {date: {$gte: new Date(inputDateFrom)}}, {date: {$lte: new Date(inputDateTo)}}]}
    } else {
        return res.status(400).send({
           message: "Input item missing or please enter valid dates in format yyyy-mm-dd"
       })
    }
    Wish.find(query).then(wish => {
        if(wish && wish.length === 0) {
            return res.status(200).send({
                message: "No wishes found for the given date range"
            })
        }
        res.status(200).json(wish)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error searching wishes."
        })
    })
  })

module.exports = router