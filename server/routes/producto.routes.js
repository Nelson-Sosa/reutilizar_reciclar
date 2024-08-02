const ProductoController = require('../controllers/producto.controller');

module.exports = (app) => {
    app.get('/api/productos', ProductoController.todosLosProductos);
    app.post('/api/agregar/producto', ProductoController.agregarProducto);
    app.get('/api/producto/:id', ProductoController.getProducto);
    app.put('/api/producto/:id', ProductoController.actualizarProducto);
    app.delete('/api/producto/:id', ProductoController.eliminarProducto);




};
