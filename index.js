const express = require('express')
const app = express()
/*const port = 3000 /*1024 -> 65535 - are good port numbers for dev, they are typically used in development, don't need to be an admin user with special privileges. Do not use const port =80*/
const port = 3000
const port2 = 8000 //you have forgotten to add your port
const testRoute = require('./routes/myTestRoute')

//require routes here
const calculatorRoute = require('./routes/calculatorRoute')

//create a route to a static html page
app.use('/', express.static('public'))
app.use(express.json())

//create a route to a router
app.use('/my-test-route', testRoute)
app.use('/calculator', calculatorRoute)

/*app.get('/test', (req, res) => {
res.send('Hello World! 123 456')
}) */

//start the server
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/calculator', calculatorRoute)

//  Monday exercise 3/04/23
app.get('/', (req, res) => {
    res.send('Hello World2!')
})

// app.listen(port2, () => {
//     console.log(`Example app
//     listening at
//     http://localhost:${port2}`)
// })

/*create new endpoints with port number - copy and paste. Then do 'npm start' in terminal and should show new port number in terminal. Ctrl and click -
should show new message */

/*app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app
listening at
http://localhost:${port}`)
}) */