import firebaseConfig from "./firebase_config.js"
import fetch from "node-fetch";
import * as fs from "node:fs"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';


// Your web app's Firebase configuration


 // Iniciar instancia de mi app de firebase con mis datos 
const app = initializeApp(firebaseConfig);

 // Aislar el "fire store" de la instancia en la variable db para facil manejo 
const db = getFirestore(app);

 /**
*
* @param {Object} db recibe un objeto con una referencia a un fire store 
* @returns retorna el contenido de la coleccion "profesionales" */

async function getProfesionales(db){
   // Buscar la coleccion profesionales en la base de datos que se recibio
   // y guardar la referencia (direccion) en la variable profesionalesCollection
  const profesionalesCollection = collection(db, "profesionales");
  // Extraer los registros de la coleccion referenciada en profesionales Collection
  const profesionalesSnapshot = await getDocs(profesionalesCollection);
  // organizar los registros almacenados de profesionalesSnapshot en 
  // un array llamado profesionalesList
  const profesionalesList = profesionalesSnapshot.docs.map(doc=>doc.data());
  // retornanr el array re registros
  return profesionalesList;
}
async function getProductos(db){
  const productosCollection = collection(db, "productos");
  const productosSnapshot = await getDocs(productosCollection);
  const productosList = productosSnapshot.docs.map(doc=>doc.data());
  return productosList
}

// Declara un objeto contenidoCrudo
const contenidoCrudo = {
  // la llave prefesiones se llena con getProfesionales
  // pasamos db como referencia a nustro fire store
  // await para que espere a que el contenido sea "llamado" antes de seguir 
  profesionales: await getProfesionales(db),
  productos: await getProductos(db)
};
  // tomar el JSON y aplanarlo en un string con cara de JSON para escribirlo fcil en un archivo
const contenido = JSON.stringify(contenidoCrudo);
// escribir el string con cara de JSON en un archivo
fs.writeFile("./src/pages/data.json", contenido, (err)=>{console.log(err)})

