const userController = require("../controllers/user.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    // When one of these URLS is visited, execute the corresponding method.
    app.post("/api/users", userController.create);
    // app.get("/api/users", userController.getAll);
    // app.get("/api/users/:id", userController.getOne);
    // app.delete("/api/user/:id", userController.delete);
    // app.put("/api/users/:id", userController.update);
};