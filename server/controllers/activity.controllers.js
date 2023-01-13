const connection = require("../databases/sequelize");
const activityModel = require("../models/activity.model");

const activity = {
  /**
   * Inserta un activity
   * @param {json} req La petición
   * @param {json} res La respuesta
   */
  newEvent: async (req, res) => {
    try {
      const { titulo, descripcion } = req.body;
      var con = await connection.open(); 
      const activityM = await activityModel.create(con); 
      const activity = await activityM.create({ titulo, descripcion, categoria:"evento" });
      res.json(true);
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  },

  /**
   * Devuelve los datos de un evento
   * @param {json} req La petición
   * @param {json} res La respuesta
   */
  getEvent: async (req, res) => {
    try {
      var con = await connection.open();
      const activityM = await activityModel.create(con);
      const activity = await activityM.findOne({ where: { id: req.params.id } })
      res.json(activity);
    } catch (ValidationError) {
        console.log(ValidationError);
      res.json(false);
    }finally{
      await connection.close(con);
    }
  },

}

module.exports = activity;