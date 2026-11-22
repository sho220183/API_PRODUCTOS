
import { Producto } from '../models/productoModel.js';

// Listar todos los productos
export const listarProductos = async (req, res) => {
    try {
        const productos = await Producto.find();

        res.status(200).json(productos);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener los productos',
            error: error.message
        });
    }
};