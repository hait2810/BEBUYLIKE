const express = require('express');
const routerCode = express.Router()
const Codes = require('../models/code')
routerCode.post('/codes', async (req,res) => {
        try {
            const codes = await Codes(req.body).save()
            res.json(codes)
        } catch (error) {
            res.status(400).json({message:"Không thể tạo mới"});
        }
})
routerCode.get('/codes', async (req,res) => {
    try {
        const codes = await Codes.find().exec()
        res.json(codes)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"});
    }
})
routerCode.put('/codes/:id', async (req,res) => {
    try {
        const codes = await Codes.findByIdAndUpdate({_id:req.params.id}, req.body).exec()
        res.json(codes)
    } catch (error) {
        res.status(400).json({message:"Không thể sửa"});
    }
})
routerCode.get('/codes/:id', async (req,res) => {
    try {
        const codes = await Codes.findById({_id: req.params.id}).exec()
        res.json(codes)
    } catch (error) {
        res.status(400).json({message:"Không thể sửa"});
    }
})
routerCode.delete('/codes/:id', async (req,res) => {
    try {
        const codes = await Codes.findByIdAndDelete({_id:req.params.id}).exec()
        res.json(codes)
    } catch (error) {
        res.status(400).json({message:"Không thể xoá"});
    }
})
module.exports = routerCode