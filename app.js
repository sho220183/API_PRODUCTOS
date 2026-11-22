import express from 'express';
import cors from 'cors';

import productoRoutes from './routes/productoRoutes.js';

const app = express();

// Middlewares
app.use(express.json()); //Permite recibir datos en formato JSON.
app.use(express.urlencoded({ extended: true })); //Permite interpretar datos enviados mediante formularios.
app.use(cors()); //Configura el acceso a la API desde otros orígenes.

// Middleware de registro de solicitudes
app.use((req, res, next) => {
    console.log(
        `[${new Date().toISOString()}] ${req.method} ${req.path}`
    );
    next();
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Productos funcionando correctamente'
    });
});

// Rutas de productos
app.use('/api/productos', productoRoutes);

export default app;