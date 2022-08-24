const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // unique: true
    },
    desc: {
        type: String,
        required: true,
        // unique: true
    },
    photo: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: false,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }



}, { timestamps: true })

module.exports = mongoose.model("Post", PostSchema)

// const mongoose = require("mongoose");

// const { Schema } = mongoose;

// const PostSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
// });

// module.exports =
//     mongoose.models.AllPosts || mongoose.model("AllPosts", PostSchema);
