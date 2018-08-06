import express from 'express'
import Messagebird from '../service/MessageBird'
import { check, validationResult } from 'express-validator/check'

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
            return res.status(reason.response.status).json({
                success: false,
                content: 'Can not finish requet'
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
                content: 'Can not finish requet'
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
                content: 'Can not finish requet'
            })
        })
})


router.post('/messages', (req, res) => {
    // if(!errors.isEmpty()){
    //     console.log('errors: >>>', JSON.stringify(errors.array(), null, 2));
    //     return res.status(200).json({
    //         success: false,
    //         content: errors.array()
    //     })
        
    // }

    return res.status(200).json({
        success: true,
        content: data
    })

    // return res.status(reason.response.status).json({
    //     success: false,
    //     content: 'Can not finish requet'
    // })
    
    // messagebird.messages.send(req.body)
    //     .then(({ data }) => {
    //         console.log(data);
    //         return res.status(200).json({
    //             success: true,
    //             content: data
    //         })
    //     }).catch(reason => {
    //         return res.status(reason.response.status).json({
    //             success: false,
    //             content: 'Can not finish requet'
    //         })
    //     })
})

export default router