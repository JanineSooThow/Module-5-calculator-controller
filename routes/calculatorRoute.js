
var express = require('express')

var router = express.Router()

var calculatorController = require('../controllers/calculatorController')


router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.number1)
    let number2 = parseInt(req.query.number2);
    let result = number1 + number2 //need to use the name "result", because that is what you use to call it in the front end (index.html)

    console.log(result)
    res.status(200) //200 series means ok (error status in 400 - 500 range) 403 = forbidden, 401 - unauthorised, 500 - server error
    res.json({ result: result })
})

// path
router.get(`/subtract/:number1/:number2`, (req, res) => {
    let number1 = parseInt(req.params.number1)
    let number2 = parseInt(req.params.number2);
    let result = number1 - number2

    console.log(result);    //need to add a response to get the result
    res.status(200);
    res.json({ result: result });
})

//BODY

// router.post('/subtract', (req, res) => {
//     let number1 = parseInt(req.body.number1)
//     let number2 = parseInt(req.body.number2)
//     let result = number1 - number2

//     console.log(result)
//     res.status(200) // 200 series means ok (error status in 400 - 500 range) 403 = forbidden // 401 = unauthorised // 500 means server error
//     res.json({ "result": result })

// })


// router.post('/subtract', (req, res) => {
// })

// var calculatorController = require('../controllers/calculatorController')
router.get("/subtract", calculatorController.subtractNumbers);
router.post("/subtract", calculatorController.subtractNumbers);
router.get('/add', calculatorController.addNumbers)
router.post('/add', calculatorController.addNumbers)
//just added some stuff to test it out, and it works!,  added some controllers to the calculator match the routes


// router.get('/add', (req, res) => { //this
// }) this
// router.get('/subtract', calculatorController.addNumbers)  // ..and this is kinda lost, i guess?


module.exports = router
//    console.log(result)
//     res.status(200) // 200 series means ok (error status in 400 - 500 range) 403 = forbidden // 401 = unauthorised // 500 means server error
//     res.json({"result":result})
// })




//Great work Janine! , This is a good way to understand the routes and controllers, and how they work together... and also how the frontend fetches the data from the backend.