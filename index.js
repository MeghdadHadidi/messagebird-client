import express from 'express'
import routes from './routes'
import bodyParser from 'body-parser'
import compression from 'compression'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'

const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 4000)

const app = express()
const dev = app.get('env') !== 'production'

if(!dev){
    app.disable('x-powered-by')
    app.use(morgan('common'))
    app.use(compression())
    app.use(cors())
}
else{
    app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => console.log('Server is listening on 4000'))