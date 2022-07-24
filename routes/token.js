const express = require('express');
const routerToken = express.Router()
const Tokens = require('../models/token')
routerToken.post('/tokens', async (req,res) => {
        try {
            const codes = await Tokens(req.body).save()
            res.json(codes)
        } catch (error) {
            res.status(400).json({message:"Không thể tạo mới"});
        }
})
routerToken.get('/tokens', async (req,res) => {
    try {
        const codes = await Tokens.find().exec()
        res.json(codes)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"});
    }
})
routerToken.put('/tokens/:id', async (req,res) => {
    try {
        const codes = await Tokens.findByIdAndUpdate({_id:req.params.id}, req.body).exec()
        res.json(codes)
    } catch (error) {
        res.status(400).json({message:"Không thể sửa"});
    }
})
routerToken.get('/tokens/:id', async (req,res) => {
    try {
        const codes = await Tokens.findById({_id: req.params.id}).exec()
        res.json(codes)
    } catch (error) {
        res.status(400).json({message:"Không thể sửa"});
    }
})

module.exports = routerToken