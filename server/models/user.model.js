const { Sequelize, DataTypes } = require('sequelize');

userModel = {
    create: async (sequelize) => {
        const Users = sequelize.define("users",{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_rol: {
                type: DataTypes.STRING,
            },
            contraseña: {
                type: DataTypes.STRING,
            },
            fecha_alt: {
                type: DataTypes.STRING,
            },
            nombre: {
                type: DataTypes.INTEGER,
            },
            apellido_1: {
                type: DataTypes.INTEGER,
            },
            apellido_2: {
                type: DataTypes.INTEGER,
            },
            fecha_nac: {
                type: DataTypes.INTEGER,
            },
            tipo_doc: {
                type: DataTypes.INT,
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

module.exports = userModel;