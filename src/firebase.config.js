import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBNFga2ClOkUo4sxU7V8mZPHM_ZQelnOrI",
    authDomain: "foodcourt-6bb1e.firebaseapp.com",
    databaseURL: "https://foodcourt-6bb1e-default-rtdb.firebaseio.com",
    projectId: "foodcourt-6bb1e",
    storageBucket: "foodcourt-6bb1e.appspot.com",
    messagingSenderId: "623032297959",
    appId: "1:623032297959:web:b2a6f05a6ac652a8f23542"
  };

  const app = getApps.length  > 0 ? getApp() : initializeApp(firebaseConfig);   
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage};