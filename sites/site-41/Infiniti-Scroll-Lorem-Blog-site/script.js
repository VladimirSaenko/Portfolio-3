const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;

async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    // console.log(res)
    const data = await res.json();
    // console.log(data);
    return data;
}

async function showPosts() {
    const posts = await getPosts();
    // console.log(posts);
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>`;
        postsContainer.appendChild(postEl);
    });
}

function showLoading() {
    loading.classList.add('show');
    setTimeout(() => {
        loading.classList.remove('show');
        setTimeout(() => {
            page++;
            showPosts();
        }, 300)
    }, 1000);
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // console.log('ScrollTop: ', scrollTop);
    // console.log('ScrollHeight: ', scrollHeight);
    // console.log('ClientHeight: ', clientHeight);
    // console.log('--------------------------');
    if(scrollHeight - scrollTop <= clientHeight) {
        showLoading();
    }
})

function filterPosts(e) {
    const text = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const titlePost = post.querySelector('.post-title').innerText.toUpperCase();
        const titleBody = post.querySelector('.post-body').innerText.toUpperCase();
        if(titleBody.indexOf(text) > -1 || titlePost.indexOf(text) > -1) {
            post.style.display = 'flex';
        }
        else {
            post.style.display = 'none';
        }
    })
}

showPosts();
filter.addEventListener('input', filterPosts);