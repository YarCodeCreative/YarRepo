const express = require('express');

const app = express();

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
    message: 'Posts fetched succesfuly!',
    posts:posts
  });
});

module.exports = app;
