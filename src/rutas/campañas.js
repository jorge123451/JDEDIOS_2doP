const { Router } = require('express');
const consultas = require('../consultasCampañas');
const router = Router();

router.get('/', async (req, res) => {
    const consulta = await consultas.getCampañas();
    return res.status(200).json(consulta);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const consulta = await consultas.getCampañaByID(id);
    if (consulta.length === 0) {
        return res.status(400).json({ mensaje: 'Campaña no encontrada' });
    }
    return res.status(200).json(consulta);
});

router.post('/', async (req, res) => {
    const { nombre_campaña, detalles, fecha_inicio, fecha_fin, tipo, objetivo, presupuesto, estado, responsable } = req.body;
    const consulta = await consultas.insertCampaña(nombre_campaña, detalles, fecha_inicio, fecha_fin, tipo, objetivo, presupuesto, estado, responsable);
    return res.status(200).json(consulta);
});

router.put('/', async (req, res) => {
    const { id, nombre_campaña, detalles, fecha_inicio, fecha_fin, tipo, objetivo, presupuesto, estado, responsable } = req.body;
    const consulta = await consultas.updateCampaña(id, nombre_campaña, detalles, fecha_inicio, fecha_fin, tipo, objetivo, presupuesto, estado, responsable);
    if (consulta === null) {
        return res.status(400).json({ mensaje: 'Campaña no encontrada' });
    }
    return res.status(200).json({ mensaje: 'Campaña actualizada correctamente' });
});

router.delete('/', async (req, res) => {
    const { id } = req.body;
    const consulta = await consultas.deleteCampaña(id);
    if (consulta === null) {
        return res.status(400).json({ mensaje: 'Campaña no encontrada' });
    }
    return res.status(200).json({ mensaje: 'Campaña ha sido borrada exitosamente' });
});

module.exports = router;
