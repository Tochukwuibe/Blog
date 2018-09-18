import * as mongoose from 'mongoose';
// defining a schema
const schema = mongoose.Schema;


// the schema for the posts
const PostSchema =  new schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    content: {
        type: String,
        default: '',
        required: true
    }
})



// defining the post as a model in mongoose
export default mongoose.model('Post', PostSchema)
