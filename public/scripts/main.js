const newPost = document.getElementById('newPost');


document.addEventListener('DOMContentLoaded', () => {
  updatePosts();
})

const updatePosts = () => {
  fetch('http://localhost:192.168.18.105/api/all').then((res, rej) => {
    return res.json()
  })
  .then((res, rej) => {
    const posts = JSON.parse(res);
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
      const card = 
        `
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="card-title">${post.title}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">${post.description}.</p>
            </div>
          </div>

        `
      postsContainer.innerHTML += card;
    })
  })
}

const addPost = () => {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  
  const post = {
    title: title.value,
    description: description.value
  }

  const request = {
    method: "POST",
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(post)
  }

  fetch('http://localhost:192.168.18.105/api/new', request).then((res, rej) => {
    updatePosts();
  })

  title.value = '';
  description.value = '';
}

newPost.onclick = addPost;