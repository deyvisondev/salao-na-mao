const express = require('express');
const router = express.Router();
const Salao = require('../models/salaoModel');
const Servico = require('../models/servicoModel');
const knexConfig = require('../../database');  // Substitua pelo caminho correto do seu arquivo de configuração
const { QueryBuilder } = require('objection');
const knex = require('knex')(knexConfig.development);

router.post('/', async (req, res) => {
    try {
        const newSalao = await Salao.query().insert(req.body);
        res.json({ salao: newSalao });
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
});


/* router.get('/servico/:salao_id', async (req, res) => {
    try {
        const salaoId = req.params.salao_id;
        const query = `
        SELECT id, titulo
        FROM servico
        WHERE salao_id = ? AND status = 'A'
    `;

    const servicos = await knex.raw(query, [salaoId]);

    res.json({
        error: false,
        servicos: servicos.rows.map((s) => ({ label: s.titulo, value: s.id })),
    });

} catch (error) {
    res.status(500).json({ error: true, message: error.message });
}
}); */

router.get('/servico/:salaoId', async (req, res) => {
    try {
        const salaoId = req.params.salaoId;
        const selectService = knex('servico')
        .where({
            salao_id: salaoId,
            status: 'A',
        })
        .select('id', 'titulo');

    console.log(selectService.toString());  // Exibe a consulta SQL gerada no console

    const servicos = await selectService;

        res.json({
            error: false,
            servicos: servicos.map((s) => ({ label: s.titulo, value: s.id })),
        });

    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
});

module.exports = router;