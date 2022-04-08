const greenHouseController = require("../controllers/greenHouse.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    // When one of these URLS is visited, execute the corresponding method.
    app.post("/api/greenHouse", greenHouseController.create);
    app.get("/api/greenHouse/sendEmail/:id", greenHouseController.sendEmail);
    app.get("/api/greenHouse", greenHouseController.getAll);
    app.get("/api/greenHouse/:id", greenHouseController.getOne);
    app.delete("/api/greenHouse/:id", greenHouseController.delete);
    app.put("/api/greenHouse/:id", greenHouseController.update);
};