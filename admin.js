import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 YOUR REAL FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyDDBByPXyiq1P95RfZYCeeXV6YBuI6FoyYw",
    authDomain: "swiftklean-blog-2.firebaseapp.com",
    projectId: "swiftklean-blog-2",
    storageBucket: "swiftklean-blog-2.firebasestorage.app",
    messagingSenderId: "227227090206",
    appId: "1:227227090206:web:10187ddde417afc71e5d0f"
};
// INIT
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🚀 MAIN FUNCTION
window.addPost = async function () {
    console.log("Publishing...");

    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;

    if (!title || !image || !content) {
        alert("⚠️ Fill all fields!");
        return;
    }

    try {
        await addDoc(collection(db, "posts"), {
            title: title,
            image: image,
            content: content,
            created: serverTimestamp()
        });

        alert("✅ Post published!");

        // clear fields
        document.getElementById("title").value = "";
        document.getElementById("image").value = "";
        document.getElementById("content").value = "";

    } catch (error) {
        console.error("ERROR:", error);
        alert("❌ Failed to publish");
    }
};
window.addPost = async function () {
    console.log("Publishing...");

    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;

    try {
        const docRef = await addDoc(collection(db, "posts"), {
            title,
            image,
            content,
            created: new Date()
        });

        console.log("SUCCESS:", docRef.id);
        alert("✅ Posted!");

    } catch (error) {
        console.error("FIREBASE ERROR:", error);
        alert("❌ Failed");
    }
};