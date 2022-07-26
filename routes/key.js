const express = require('express');
const routerKeys = express.Router()
const Keys = require('../models/key')
routerKeys.post('/keys', async (req,res) => {
        try {
            const keys = await Keys(req.body).save()
            res.json(keys)
        } catch (error) {
            res.status(400).json({message:"Không thể tạo mới"});
        }
})
routerKeys.get('/keys', async (req,res) => {
    try {
        const keys = await Keys.find().exec()
        res.json(keys)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"});
    }
})
routerKeys.put('/keys/:id', async (req,res) => {
    try {
        const keys = await Keys.findByIdAndUpdate({_id:req.params.id}, req.body).exec()
        res.json(keys)
    } catch (error) {
        res.status(400).json({message:"Không thể sửa"});
    }
})
routerKeys.get('/keys/:id', async (req,res) => {
    try {
        const keys = await Keys.findById({_id: req.params.id}).exec()
        res.json(keys)
    } catch (error) {
        res.status(400).json({message:"Không thể hiển thị"});
    }
})
routerKeys.delete('/keys/:id', async (req,res) => {
    try {
        const keys = await Keys.findByIdAndDelete({_id: req.params.id}).exec()
        res.json(keys);
    } catch (error) {
        res.status(400).json({message: "Không thể xoá"})
    }
})

module.exports = routerKeys