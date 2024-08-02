import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom';
import ProductoForm from '../componentes/ProductoForm';
import DeleteButton from '../componentes/DeleteButton';
import './Detail.css'

const Detail = (props) => {
    const { id } = useParams();
    const navigate= useNavigate();
    const [producto, setProducto] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/producto/${id}`)
            .then(res => {
                setProducto(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [id]);

    const actualizarProducto = (producto) => {
        axios.put(`http://localhost:8000/api/producto/${id}`, producto)
            .then(res => console.log(res));
    };

    return (
        <div>
            <h1>Actualizar producto</h1>
            {loaded && producto && (
                <>
                    <ProductoForm
                        onSubmitProp={actualizarProducto}
                        initialTitulo={producto.Titulo}
                        initialPrecio={producto.Precio}
                        initialDescripcion={producto.Descripcion}
                    />
                    <DeleteButton productoId={producto._id} successCallback={() => navigate.push("/producto")} />
                </>
            )}
        </div>
    );
}

export default Detail;
