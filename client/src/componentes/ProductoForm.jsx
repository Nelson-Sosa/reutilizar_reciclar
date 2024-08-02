import React, { useState, useEffect } from 'react';
import './ProductoForm.css'

const ProductoForm = (props) => {
    const { initialTitulo = '', initialPrecio = '', initialDescripcion = '', onSubmitProp } = props;
    const [Titulo, setTitulo] = useState(initialTitulo);
    const [Precio, setPrecio] = useState(initialPrecio);
    const [Descripcion, setDescripcion] = useState(initialDescripcion);

    useEffect(() => {
        setTitulo(initialTitulo);
        setPrecio(initialPrecio);
        setDescripcion(initialDescripcion);
    }, [initialTitulo, initialPrecio, initialDescripcion]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ Titulo, Precio, Descripcion });
    }

    return (
        <form onSubmit={onSubmitHandler} className='product-form'>
            <h2>Gerente de producto</h2>
            <p>
                <label>Titulo</label><br/>
                <input type="text" onChange={(e) => setTitulo(e.target.value)} value={Titulo} />
            </p>
            <p>
                <label>Precio</label><br/>
                <input type='number' onChange={(e) => setPrecio(e.target.value)} value={Precio} />
            </p>
            <p>
                <label>Descripcion</label><br/>
                <input type='text' onChange={(e) => setDescripcion(e.target.value)} value={Descripcion} />
            </p>
            <input type="submit" value="Crear" />
        </form>
    );
}

export default ProductoForm;
