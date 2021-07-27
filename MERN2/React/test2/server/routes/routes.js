const userController = require("../controllers/user.controller");


module.exports = (app) => {

    app.post("/api/users", userController.create);
    app.get("/api/users", userController.getAll);
    app.get("/api/users/:id", userController.getOne);
    app.delete("/api/user/:id", userController.delete);
    app.put("/api/users/:id", userController.update);
};