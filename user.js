async function main() {
    const id = localStorage.getItem("id");
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postData = await posts.json();
    console.log(postData);

    postData.map((post) => {
        // process each post
        console.log(post);
    });
}

main();