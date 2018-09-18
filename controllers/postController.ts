import Post from '../models/post';

// get all posts 
export const getAllPosts = (req, res, next) => {
    Post.find((err, posts) => {

        // bad err handeling
        if(err) {
            res.status(500).json({err})
        }

        // return posts id no error 
        res.status(200).json({ posts })

    })
}

// get post by Id 
export const getPostById = (req, res, next) => {
    const id = req.params.id;

    Post.findById( id, (err, post) => {
        if(err) {
            res.status(500).json({err})
        }

        res.status(200).json({ post })
    })
    
}

// create post 
export const createPost = (req, res, next) => {
        const title = req.body.title;
        const content = req.body.content;

        if(!title) {
            // if no title then unprocessable entity
            res.status(422).json({error: 'title is required'})
        }

        if(!content) {
            res.status(422).json({error: 'content is required'})
        }

        const post = new Post({
            title,
            content
        })

        post.save((err, post) => {
            if(err) {
                res.status(500).json({err})
            }
    
            // 201 is created
            res.status(201).json({ post })
        })
}

// update post by id 
export const updatePost = (req, res, next) => {
    const id = req.params.id;

    Post.findByIdAndUpdate(id, req.body, (err, post) => {
        if(err) {
            res.status(500).json({err})
        }

        // 201 is created
        res.status(200).json({ post })
    })
}

// delete post by id 
export const deletePost = (req, res, next) => {
    const id = req.params.id;

    Post.findByIdAndRemove(id, (err, post) => {
        if(err) {
            res.status(500).json({err})
        }

        // 201 is created
        res.status(200).json({ post })
    })

    
}