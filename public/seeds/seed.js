const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'john_doe',
    password: 'password123',
  },
  {
    username: 'jane_doe',
    password: 'password123',
  },
];

const postData = [
  {
    title: 'First Post',
    content: 'This is the first post content.',
    user_id: 1,
  },
  {
    title: 'Second Post',
    content: 'This is the second post content.',
    user_id: 2,
  },
];

const commentData = [
  {
    comment_text: 'This is a comment.',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'This is another comment.',
    user_id: 2,
    post_id: 2,
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData);

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
