import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
const PORT = 4000
import connect from './Database/Connection.js'
import router from './Router/Route.js'

const app = express()

// middleware

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(201).json('Home get request')
})

app.use('/api', router)

connect().then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server connected to http://localhost:${PORT}`)
        })

    } catch (error) {
        console.log('Cannot connect to server')
    }
}). catch(error => {
    console.log('Invalid database connection....!')
})

