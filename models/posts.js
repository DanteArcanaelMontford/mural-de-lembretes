const uuid = require('uuid');

module.exports = {
  posts: [],
  
  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    const id = uuid.v1().toString().replaceAll('-', '');
  
    const post = {
      id: id,
      title: title,
      description: description
    }

    this.posts.push(post);
  }
}