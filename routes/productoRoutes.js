
import express from 'express';
import { listarProductos } from '../controllers/productoController.js';

const router = express.Router();

// GET: listar todos los productos
router.get('/', listarProductos);
// POST: crear productos
//router.post('/', crearProducto);

export default router;