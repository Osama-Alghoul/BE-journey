const GetPostsButton = document.getElementById("get-posts-btn");
const output = document.getElementById("output");

// Get and show posts
async function showPosts() {
  try {
    const res = await fetch("/api/posts");
    if (!res.ok) {
      throw new Error("faild to fetch posts");
    }

    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.error("Error fetching posts" + error);
  }
}

// event listener
GetPostsButton.addEventListener("click", showPosts);
