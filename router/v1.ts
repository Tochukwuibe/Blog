import * as express from 'express';
import {getAllPosts, getPostById, createPost, updatePost, deletePost} from '../controllers//postController';

export default (app) => {
    const apiRoutes = express.Router();
    const postRoutes = express.Router();

    // Post Routes

    // append postRoutes to apiRoutes

    apiRoutes.use('/posts', postRoutes) // user the post routes for the routes endpoint

    // get all posts 
    postRoutes.get('/', getAllPosts);
   
    // get post 
    postRoutes.get(`/:id`, getPostById);

    // create post
    postRoutes.post('/', createPost);

    // update post 
    postRoutes.put('/:id', updatePost)


    postRoutes.delete('/:id', deletePost)







    app.use('/api', apiRoutes)
}