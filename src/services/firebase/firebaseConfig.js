import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAeFDQx3ZcICT9gr98rxQKxl2jBlKI4I7o",
    authDomain: "vivo-extracredit.firebaseapp.com",
    projectId: "vivo-extracredit",
    storageBucket: "vivo-extracredit.appspot.com",
    messagingSenderId: "357509836914",  
    appId: "1:357509836914:web:79df8726d3aeb639dfd2eb"
}


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);