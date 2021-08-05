const postController = require("../controllers/post.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    // When one of these URLS is visited, execute the corresponding method.
    app.post("/api/posts", postController.create);
    app.get("/api/posts", postController.getAll);
    app.get("/api/posts/:id", postController.getOne);
    app.delete("/api/posts/:id", postController.delete);
    app.put("/api/posts/:id", postController.update);
    app.post("/api/posts/many", postController.createMany);
};