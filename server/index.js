import express from 'express'
import routes from './routes'

const app = express()
const PORT = process.env.PORT || 4000;

app.use('/api', routes)

app.listen(PORT, () => console.log('Server is listening on 4000'))