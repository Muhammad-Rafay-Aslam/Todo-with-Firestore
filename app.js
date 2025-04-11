import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJPjkzRDD7bCvkrqAL7YcVnAYRlNkGdrw",
    authDomain: "todos-database-ee4da.firebaseapp.com",
    projectId: "todos-database-ee4da",
    storageBucket: "todos-database-ee4da.firebasestorage.app",
    messagingSenderId: "384980222126",
    appId: "1:384980222126:web:eaccdfef8ae6c40290ed3f",
    measurementId: "G-N5JEF7TVLM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let getInput = document.getElementById('inp')
let getaddBtn = document.getElementById('add-Btn')
let getUl = document.getElementById('ul')

getaddBtn.addEventListener('click', async () => {
    console.log(getInput.value)
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            items: getInput.value,

        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

})

async function readdata() {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
        getUl.innerHTML += `<li>${}</li>`
        //   console.log(`${doc.id} => ${doc.data()}`);
    });

}