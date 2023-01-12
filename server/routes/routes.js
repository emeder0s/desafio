const router = require("express").Router();
const user = require("../controllers/user.controllers");

//USER
router.post("/register", user.new); //Añade un user
router.post("/login", user.login); //Login
// router.get("/logout", user.logout); //Logout
// router.post("/edit-user", user.edit); //Modifica un user
// router.post("/edit-user-password", user.editPassword); //Modifica la contrañsea de un usuario
// router.get("/user/:id",user.show); //Elimina un user
// router.delete("/delete-user/:id",user.delete );//Borra un user