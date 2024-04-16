const conexion = require('./conexion');

const getCampañas = async () => {
    const [consulta] = await conexion.execute('SELECT * FROM campañas');
    return consulta;
};

const getCampañaByID = async (id) => {
    const [consulta] = await conexion.execute('SELECT * FROM campañas WHERE id_campaña=?', [id]);
    return consulta;
};

const insertCampaña = async (nombre_campaña, detalles, fecha_inicio, fecha_fin, tipo, objetivo, presupuesto, estado, responsable) => {
    const [consulta] = await conexion.execute(
        'INSERT INTO campañas(nombre_campaña, detalles, fecha_inicio, fecha_fin, tipo, objetivo, presupuesto, estado, responsable) VALUES(?,?,?,?,?,?,?,?,?)',
        [nombre_campaña, detalles, fecha_inicio, fecha_fin, tipo, objetivo, presupuesto, estado, responsable]
    );
    return consulta;
};

const updateCampaña = async (id, nombre_campaña, detalles, fecha_inicio, fecha_fin, tipo, objetivo, presupuesto, estado, responsable) => {
    const myCampaña = await getCampañaByID(id);
    if (myCampaña.length === 0) {
        return null;
    }
    const [consulta] = await conexion.execute(
        "UPDATE campañas SET nombre_campaña=?, detalles=?, fecha_inicio=?, fecha_fin=?, tipo=?, objetivo=?, presupuesto=?, estado=?, responsable=? WHERE id_campaña=?",
        [nombre_campaña, detalles, fecha_inicio, fecha_fin, tipo, objetivo, presupuesto, estado, responsable, id]
    );
    return consulta;
};

const deleteCampaña = async (id) => {
    const [consulta] = await conexion.execute('DELETE FROM campañas WHERE id_campaña=?', [id]);
    return consulta;
};

module.exports = { getCampañas, getCampañaByID, insertCampaña, updateCampaña, deleteCampaña };
