import express from 'express'
import routes from './routes'
import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 4000

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, 'client/build')));

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => console.log('Server is listening on 4000'))