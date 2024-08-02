const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    Titulo: { type: String, required: true },
    Precio: { type: Number, required: true },
    Descripcion: { type: String, required: true }
}, { timestamps: true });

const Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Producto;
