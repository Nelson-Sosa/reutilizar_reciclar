const Producto = require('./../models/producto.model');

module.exports.todosLosProductos = (req, res) => {
    Producto.find()
        .then((productos) => res.status(200).json(productos))
        .catch((error) => res.status(500).json({ mensaje: 'Algo salió mal', error }));
};

module.exports.getProducto = (request, response) => {
    Producto.findOne({_id:request.params.id})
        .then(producto => response.json(producto))
        .catch(err => response.json(err))
}



module.exports.agregarProducto = (req, res) => {
    const productoNuevo = {
        Titulo: req.body.Titulo,
        Precio: req.body.Precio,
        Descripcion: req.body.Descripcion
    };

    Producto.create(productoNuevo)
        .then((productoConId) => res.status(201).json(productoConId))
        .catch((error) => res.status(500).json({ mensaje: 'Algo salió mal', error }));
};

module.exports.actualizarProducto = (request, response) => {
    Producto.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(actualizarProducto => response.json(actualizarProducto))
        .catch(err => response.json(err))
}

module.exports.eliminarProducto = (request, response) => {
    Producto.deleteOne({ _id: request.params.id })
        .then(eliminarConfirmar => response.json(eliminarConfirmar))
        .catch(err => response.json(err));
};