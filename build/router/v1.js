"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var postController_1 = require("../controllers//postController");
exports.default = (function (app) {
    var apiRoutes = express.Router();
    var postRoutes = express.Router();
    apiRoutes.use('/posts', postRoutes);
    postRoutes.get('/', postController_1.getAllPosts);
    postRoutes.get("/:id", postController_1.getPostById);
    postRoutes.post('/', postController_1.createPost);
    postRoutes.put('/:id', postController_1.updatePost);
    postRoutes.delete('/:id', postController_1.deletePost);
    app.use('/api', apiRoutes);
});
//# sourceMappingURL=v1.js.map