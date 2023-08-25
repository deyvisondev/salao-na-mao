const express = require('express')
const router = express.Router()
const Servico = require('../models/servicoModel')

router.post('/', async (req, res) => {
    try {
        const newServico = await Servico.query().insert(req.body);
        res.json({ servico: newServico });
    } catch (error) {
        res.status(500).json({error: true, message: error.message})
    }
});

module.exports = router;