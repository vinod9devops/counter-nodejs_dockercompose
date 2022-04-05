const express = require('express')
const app = express()
const routes = require('./routes.js');

// routes
app.use('/api', routes)

app.use(express.static('public'))

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})