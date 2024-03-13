function loadPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBody(data));
}

function displayBody(posts) {
  const postDiv = document.getElementById("post-container");
  for (const post of posts) {
    console.log(post);
    postDiv.classList.add("post");
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>user-${post.userId}</h4>
    <h3>Title -${post.title}</h6>
    <p>Post - ${post.body}</p>
    `;
    postDiv.appendChild(div);
  }
}

loadPost();

function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

function patchAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function creatAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
