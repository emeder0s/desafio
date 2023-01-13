const { Sequelize, DataTypes } = require('sequelize');

eventModel = {
    create: async (sequelize) => {
        const Users = sequelize.define("actividades",{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            event_rol: {
                type: DataTypes.STRING,
            },
            contraseña: {
                type: DataTypes.STRING,
            },
            nombre: {
                type: DataTypes.STRING,
            },
            apellido_1: {
                type: DataTypes.STRING,
            },
            apellido_2: {
                type: DataTypes.STRING,
            },
            fecha_nac: {
                type: DataTypes.DATE,
            },
            tipo_doc: {
                type: DataTypes.INTEGER,
            },
            num_doc: {
                type: DataTypes.STRING,
            }
        }, {
            timestamps: false
        })

        return Users
    }
}

module.exports = eventModel;