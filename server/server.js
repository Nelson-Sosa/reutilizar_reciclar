const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/producto.routes')(app);

app.listen(8000, () => {
    console.log("Enchufado en el puerto 8000");
});
