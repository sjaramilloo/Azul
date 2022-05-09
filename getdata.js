import firebaseConfig from "./firebase_config.js"
import fetch from "node-fetch";
import * as fs from "node:fs"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';


// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getProfesionales(db){
  const profesionalesCollection = collection(db, "profesionales");
  const profesionalesSnapshot = await getDocs(profesionalesCollection);
  const profesionalesList = profesionalesSnapshot.docs.map(doc=>doc.data());
  return profesionalesList;
}

const contenidoCrudo = {profesionales: await getProfesionales(db)};
const contenido = JSON.stringify(contenidoCrudo);

fs.writeFile("./src/pages/profesionales.json", contenido, (err)=>{console.log(err)})
