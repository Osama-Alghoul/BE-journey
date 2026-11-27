const GetPostsButton = document.getElementById("get-posts-btn");
const output = document.getElementById("output");
const addPostForm = document.getElementById("add-post-form");
const newPostInput = document.getElementById("new-post");
const formPosts = document.getElementById("new-posts-from-the-form");

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

addPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = newPostInput.value.trim();
  if (!title) {
    return;
  }

  try {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("Failed to create post");
    }

    addPostForm.reset();
    formPosts.innerHTML = "";

    const posts = await res.json();

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      formPosts.appendChild(postEl);
    });
  } catch (error) {
    console.error("Error creating post:", error);
  }
});
