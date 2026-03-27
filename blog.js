import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDDBByPXyiq1P95RfZYCeeXV6YBuI6FoyYw",
    authDomain: "swiftklean-blog-2.firebaseapp.com",
    projectId: "swiftklean-blog-2",
    storageBucket: "swiftklean-blog-2.firebasestorage.app",
    messagingSenderId: "227227090206",
    appId: "1:227227090206:web:10187ddde417afc71e5d0f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const container = document.getElementById("blog-posts");

async function loadPosts() {
    const querySnapshot = await getDocs(collection(db, "posts"));

    querySnapshot.forEach((doc) => {
        const data = doc.data();

        const post = document.createElement("div");

        post.innerHTML = `
      <h2>${data.title}</h2>
      <img src="${data.image}" style="width:100%">
      <p>${data.content}</p>
    `;

        container.appendChild(post);
    });
}

loadPosts();