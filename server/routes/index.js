import express from 'express'
import Messagebird from '../service/MessageBird'
import { check, validationResult } from 'express-validator/check'

const router = express.Router()
const messagebird = Messagebird('Fa0H7ZRZufsGNd5geICZxVHDX')

router.get('/balance', (req, res) => {
    messagebird.balance.get()
        .then(({ data }) => {
            return res.status(200).json({
                success: true,
                content: data
            })
        }).catch(reason => {
            return res.status(reason.response.status).json({
                success: false,
                content: {
                    error: reason.response.statusText
                }
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
            return res.status(reason.response.status).json({
                success: false,
                content: {
                    error: 'Can not finish request'
                }
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
            return res.status(reason.response.status).json({
                success: false,
                content: {
                    error: 'Can not finish request'
                }
            })
        })
})


router.post('/messages', [
    check('recipients').isArray().withMessage('Recipients should be passed as an array'),
    check('recipients').not().isEmpty().withMessage('Please provide recipients'),
    check('body').not().isEmpty().withMessage('Please provide message body'),
    check('originator').not().isEmpty().withMessage('Originator is required')
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            content: {
                error: 'Validation error',
                data: errors.array()
            }
        })
    }

    messagebird.messages.send(req.body)
        .then(({ data }) => {
            return res.status(200).json({
                success: true,
                content: data
            })
        }).catch(reason => {
            return res.status(reason.response.status).json({
                success: false,
                content: {
                    error: reason.response.statusText
                }
            })
        })
})

export default router