const postListEl = document.querySelector('')
async function main() {
    const id = localStorage.getItem("id");
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postData = await posts.json();
    console.log(postData);

    postListEl.innerHTML = postData.map((post) => `
         <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
`).join("");

    const container = document.getElementById('posts');
    if (container) {
        container.innerHTML = html;
    } else {
        console.log('No container element with id "posts" found.');
    }
}

main();