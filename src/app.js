const { Op } = require('sequelize');
const db = require('../models'); // ✅ no ()
const { User, Post, Comment } = db;

async function appStart() {
    console.log('Start App');
      const user = await User.create({ name: 'Alice', email: 'alice@example.com' });

  const post = await Post.create({ title: 'Hello World', content: 'My first post', userId: user.id });

  await Comment.create({ body: 'Nice post!', userId: user.id, postId: post.id });

  const posts = await Post.findAll({
    where: { title: { [Op.like]: '%Hello%' } },
    include: [User, Comment]
  });

  console.log(JSON.stringify(posts, null, 2));
}   

module.exports = {
    appStart,
}