const mongoose = require('mongoose');

// Define schema
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

//export schema for use outside of this file
module.exports = mongoose.model('Post', postSchema);
//First argument is a user-defined name,
//and the second argument is the schema you want to use
