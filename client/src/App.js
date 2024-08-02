import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Actualizar from './views/Actualizar';


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
            <Routes >
                <Route exact path="/" element={<Main />} />
                <Route exact path="/producto/:id" element={<Detail/>} />
                <Route exact path="/producto/:id/edit" element={<Actualizar />} />
            </Routes>    
            </BrowserRouter>
        </div>
    );
}

export default App;
