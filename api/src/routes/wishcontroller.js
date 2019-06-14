const router = require('express').Router()
const Wish = require('../db/wish')

router.get('/getwishes', function(req, res) {
    Wish.find({}, function(err, wishes) {
        if(err) {
            console.log("Error: " +err)
        }
        res.json(wishes)
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
        console.log("Result: " +result)
        res.sendStatus(200)
    })
    .catch(err => {
        console.log("Error: " +err)
    })
})

module.exports = router
