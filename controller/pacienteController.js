const express = require('express');

const patientModel = require('../model/pacienteModel');

const upload = require('../helpers/upload/upload');

const router = express.Router();

router.post('/paciente/inserir', upload.array('picture_Patient', 2), (req,res) =>{
    let {name_Patient, email_Patient, phone_Patient, cellphone_Patient, name_Relative, phone_Relative} = req.body;

    let picture_Patient = req.files[0].path;

    patientModel.create({
        name_Patient, 
        email_Patient, 
        phone_Patient, 
        cellphone_Patient, 
        picture_Patient, 
        name_Relative, 
        phone_Relative
    }).then(()=>{
        return res.status(201).json({
            errorStatus:false,
            mensageStatus: 'PACIENTE CADASTRADO COM SUCESSO!'
        });
    }).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus: error
        });
    });
});

router.get('/paciente/selecionar', (req,res)=>{
    patientModel.findAll()
    .then(
        (patient)=>{
            res.json(patient);
        }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
})

router.put('/paciente/alterar', upload.array('picture_Patient', 2), (req,res)=>{
    let {name_Patient, email_Patient, phone_Patient, cellphone_Patient, name_Relative, phone_Relative, id} = req.body;

    let picture_Patient = req.files[0].path;

    patientModel.update(
        {
            name_Patient, 
            email_Patient, 
            phone_Patient, 
            cellphone_Patient, 
            picture_Patient, 
            name_Relative, 
            phone_Relative
        },
        {
            where:{id}
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'PACIENTE ALTERADO COM SUCESSO!'
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );


})

router.delete('/paciente/excluir/:id', (req,res)=>{
    let {id} = req.params;

    patientModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'PACIENTE EXCLUIDO COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

})

module.exports = router;