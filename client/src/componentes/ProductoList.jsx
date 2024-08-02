import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductoList = (props) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/productos')
            .then(res => setProductos(res.data))
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = productoId => {
        setProductos(productos.filter(producto => producto._id !== productoId));
    };

    return (
        <div>
            <h2>Todos los productos</h2>
            {productos.map((producto, idx) => (
                <p key={idx}>
                    <Link to={"/producto/" + producto._id}>
                        {producto.Titulo}, {producto.Precio}, {producto.Descripcion}
                    </Link>
                    |
                    <Link to={"/producto/" + producto._id + "/edit"}>
                        <button>
                            Editar
                        </button>
                    </Link>
                    |
                    <DeleteButton productoId={producto._id} successCallback={() => removeFromDom(producto._id)} />
                </p>
            ))}
        </div>
    );
};

export default ProductoList;
