import express from 'express'
import Messagebird from '../service/MessageBird'
import { check, validationResult } from 'express-validator'

const router = express.Router()
const messagebird = Messagebird('mAZ4WdLQeoAWrRrWoLkAZSRvu')

router.get('/balance', (req, res) => {
    messagebird.balance.get()
        .then(({ data }) => {
            return res.status(200).json({
                success: true,
                content: data
            })
        }).catch(reason => {
            return res.status(200).json({
                success: false,
                content: reason
            })
        })
});


router.get('/messages', (req, res) => {
    messagebird.messages.get()
        .then(({ data }) => {
            return res.status(200).json({
                success: true,
                content: data
            })
        }).catch(reason => {
            return res.status(200).json({
                success: false,
                content: reason
            })
        })
})


router.get('/messages/:id', (req, res) => {
    messagebird.messages.get(req.params.id)
        .then(({ data }) => {
            return res.status(200).json({
                success: true,
                content: data
            })
        }).catch(reason => {
            return res.status(200).json({
                success: false,
                content: reason
            })
        })
})


router.post('/messages', (req, res) => {
    messagebird.messages.send(req.body)
        .then((data) => {
            console.log(JSON.stringify(data, null, 2));
            return res.status(200).json({
                success: true,
                content: data
            })
        }).catch(reason => {
            console.log(JSON.stringify(reason, null, 2));
            return res.status(200).json({
                success: false,
                content: reason
            })
        })
})

export default router