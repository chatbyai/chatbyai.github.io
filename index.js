const postButton = document.getElementById("post-button");
const postText = document.getElementById("post-text");
const postsDiv = document.getElementById("posts");

postButton.addEventListener("click", function() {
  const post = postText.value;
  if (post) {
    const newPost = document.createElement("div");
    newPost.innerText = post;
    postsDiv.appendChild(newPost);
  }
});
