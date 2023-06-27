const sequelize = require('sequelize');

const connection = require('../database/database');

const patient = connection.define(
    'tbl_patient',
    {
        name_Patient:{
            type: sequelize.STRING,
            allowNull: false
        },
        email_Patient:{
            type: sequelize.STRING,
            allowNull: false
        }, 
        phone_Patient:{
            type: sequelize.STRING,
            allowNull: false
        },
        cellphone_Patient:{
            type: sequelize.STRING,
            allowNull: false
        },
        picture_Patient:{
            type: sequelize.STRING,
            allowNull: false
        },
        name_Relative:{
            type: sequelize.STRING,
            allowNull: true
        },
        phone_Relative:{
            type: sequelize.STRING,
            allowNull: true
        }
    }
);

//patient.sync({force:true});

module.exports = patient;