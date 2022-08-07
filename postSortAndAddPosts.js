const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Content 1",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Content 2",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Content 3",
  },
];

const listPost = (data) => {
  return new Promise((resolve, reject) => {
    console.log("Postlar listeleniyor...");
    if (data) {
      console.log("Postlar başarıyla listelendi.");
      resolve(posts);
    } else {
      reject("Postlar listelenirken bir hata oluştu.");
    }
  });
};

const addPost = (post) => {
  return new Promise((resolve, reject) => {
    console.log("Yeni post ekleniyor...");
    if (post) {
      posts.push(post);
      resolve("Yeni post başarıyla eklendi.");
    } else {
      reject("Post eklenirken bir hata oluştu.");
    }
  });
};

async function postProcess() {
  try {
    let getPosts = await listPost(true);
    console.log(getPosts);
    let pushPost = await addPost({
      id: 4,
      title: "Awaited post",
      content: "awaited post desc.",
    });
    console.log(pushPost);
    getPosts = await listPost(true);
    console.log(getPosts);
  } catch (e) {
    console.log(e);
  }
}

postProcess();
