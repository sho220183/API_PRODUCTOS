
import mongoose from 'mongoose';

// Definir la estructura del producto
const productoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    precio: {
        type: Number,
        required: true,
        min: 0
    },

    descripcion: {
        type: String,
        default: ''
    }

}, {
    timestamps: true
});

// Crear el modelo
export const Producto = mongoose.model('Producto', productoSchema);