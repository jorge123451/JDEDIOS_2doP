const express = require('express');
const campañas = require('./rutas/campañas'); 

const app = express();

app.use(express.json());
app.use('/campañas', campañas); 

app.listen(3302, () => {
    console.log('Servidor ejecutándose en el puerto 3302');
});
