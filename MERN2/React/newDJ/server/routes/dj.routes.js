const djController = require("../controllers/dj.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    // When one of these URLS is visited, execute the corresponding method.
    app.post("/api/djs", djController.create);
    app.get("/api/djs/sendEmail/:id", djController.sendEmail);
    app.get("/api/djs", djController.getAll);
    app.get("/api/djs/:id", djController.getOne);
    app.delete("/api/djs/:id", djController.delete);
    app.put("/api/djs/:id", djController.update);
};