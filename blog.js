let posts = JSON.parse(localStorage.getItem("posts")) || [];

const blog = document.getElementById("blog");

if (blog) {
    posts.reverse().forEach((post, index) => {
        blog.innerHTML += `
            <div class="blog-card">
                <img src="${post.image}" class="blog-img">
                <h3>${post.title}</h3>
                <a href="post.html?id=${posts.length - 1 - index}">Read More</a>
            </div>
        `;
    });
}