const { Op } = require('sequelize');
const db = require('../models'); // ✅ no ()
const { User, Post, Comment } = db;

async function appStart() {
    console.log('Start App');
    const user = await User.create({ name: 'Alice', email: 'alice@example.com' });
    console.log('user :>> ', user.dataValues);
    
    const post = await Post.create({ title: 'Hello World', content: 'My first post', userId: user.id });
    console.log('post :>> ', post.dataValues);
    
    const comment = await Comment.create({ body: 'Nice post!', userId: user.id, postId: post.id });
    console.log('comment :>> ', comment.dataValues);

    const posts = await Post.findAll({
        where: { title: { [Op.like]: '%Hello%' } },
        include: [User, Comment]
    });

  console.log(JSON.stringify(posts, null, 2));
}   

module.exports = {
    appStart,
}