const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const patientController = require('./controller/pacienteController');

app.use('/', patientController);

app.listen(3000, () => {
    console.log("Tá rodando, amigo!");
});