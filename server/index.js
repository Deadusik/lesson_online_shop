require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3000
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res
        .status(200)
        .json({ message: 'working!' })
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`)
        })
    }
    catch (e) {
        throw e
    }
}

start()