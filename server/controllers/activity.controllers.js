const connection = require("../databases/sequelize");
const activityModel = require("../models/activity.model");
const activityCarrusel = require("../models/activity_carrusel.model")
const user = require("./user.controllers");

const activity = {
  /**
   * Inserta un activity
   * @param {json} req La petición
   * @param {json} res La respuesta
   */
  newEvent: async (req, res) => {
    try {
      const { titulo,descripcion,municipio,fecha_ini,fecha_fin,hora_empezar,hora_terminar,image } = req.body;
      var con = await connection.open(); 
      const activityM = await activityModel.create(con); 
      console.log(user.get_id_from_cookie(req));
      const activity = await activityM.create({ titulo, descripcion, categoria:"voluntariado", coordinador:user.get_id_from_cookie(req),municipio,fecha_ini,fecha_fin,hora_empezar,hora_terminar,image});
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

  getEventsByCoordinator: async (req,res) =>{
    try {
      var con = await connection.open();
      const activityM = await activityModel.create(con);
      const activities = await activityM.findAll({ where: { coordinador: user.get_id_from_cookie(req) } })
      res.json(activities);
    } catch (ValidationError) {
        console.log(ValidationError);
      res.json(false);
    }finally{
      await connection.close(con);
    }
  },


//Devuelve los 6 eventos que hay en el carrusel
  getEvents: async (req, res) => {
    try {
      var con = await connection.open();
      const activityM = await activityCarrusel.create(con);
      const allActivity = await activityM.findAll();
      res.json(allActivity);
    } catch (ValidationError) {
        console.log(ValidationError);
      res.json(false);
    }finally{
      await connection.close(con);
    }
  },

    /**
   * Guarda el producto como favorito
   * @param {*} req 
   * @param {*} res 
   */
    saveFavorite: async (req,res) => {
      // try{
      //   const fk_id_product = req.body.fk_id_product;
      //   const fk_id_user = session.get_id_from_cookie(req);
      //   await mongoose.conn();
      //   console.log(fk_id_product);
      //   const hola = await favoriteModel.create({fk_id_user, fk_id_product});
      //   console.log(hola);
      //   res.json(true);
      // }catch(e){
      //   console.log(e);
      //   res.json(false);
      // }
    },

    deleteFavorite: async (req,res) => {
      // try{
      //   const fk_id_product = req.body.fk_id_product;
      //   const fk_id_user = session.get_id_from_cookie(req);
      //   await mongoose.conn();
      //   console.log(fk_id_product);
      //   const hola = await favoriteModel.create({fk_id_user, fk_id_product});
      //   console.log(hola);
      //   res.json(true);
      // }catch(e){
      //   console.log(e);
      //   res.json(false);
      // }
    },


}

module.exports = activity;