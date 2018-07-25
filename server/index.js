import express from 'express'
import routes from './routes'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)

app.listen(PORT, () => console.log('Server is listening on 4000'))