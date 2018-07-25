import express from 'express'

const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hellooooo');
})

export default router