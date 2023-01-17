const { Sequelize, DataTypes } = require('sequelize');

eventModel = {
    create: async (sequelize) => {
        const Users = sequelize.define("eventos",{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING,
            },
            descripcion: {
                type: DataTypes.STRING,
            },
            localizacion: {
                type: DataTypes.STRING,
            },
            fecha_ini: {
                type: DataTypes.STRING,
            },
            fecha_fin: {
                type: DataTypes.STRING,
            },
            hora_empezar: {
                type: DataTypes.STRING,
            },
            hora_terminar: {
                type: DataTypes.STRING,
            },
            image: {
                type: DataTypes.STRING,
            },


        }, {
            timestamps: false
        })
        return Users
    }
}

module.exports = eventModel;