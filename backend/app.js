const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
  next();
});

//&ejA8BhBO4$7I%

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  // status code 201 means "everything is ok, a new resource was created"
  // status code 200 just means "everything is ok.
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'oiu7829',
      title: "1st server side post",
      content: "This is coming from the server"
    },
    {
      id: 'jlksdjfls9',
      title: "2nd server side post",
      content: "This is coming from the server!"
    },

  ];
  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts:posts
  });
});

module.exports = app;
