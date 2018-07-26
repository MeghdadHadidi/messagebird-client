import express from 'express'
import Messagebird from '../service/MessageBird'
import { check, validationResult } from 'express-validator'

const router = express.Router()
const messagebird = new Messagebird('mAZ4WdLQeoAWrRrWoLkAZSRvu')

router.get('/balance', (req, res) => {
    messagebird.balance.read((err, data) => {
        if(err){
            console.log('inside balance >>>>', err);
            return res.status(500).json({
                success: false,
                data: err
            })
        }

        return res.status(200).json({
            success: true,
            data
        })
    })
})

export default router