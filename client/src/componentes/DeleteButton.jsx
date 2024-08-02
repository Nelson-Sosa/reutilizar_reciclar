import React from 'react';
import axios from 'axios';

const DeleteButton = ({ productoId, successCallback }) => {
    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/producto/${productoId}`)
            .then(res => successCallback())
            .catch(err => console.error(err));
    };

    return (
        <button onClick={deleteProduct}>
            Eliminar
        </button>
    );
};

export default DeleteButton;
