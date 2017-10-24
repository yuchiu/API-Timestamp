const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const routes = require('./routes')

const app = express()
routes(app)

app.use(bodyParser.json())
app.use(cors())

app.listen(config.port)