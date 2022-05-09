import fetch from "node-fetch";
import * as fs from "node:fs"
//Se genera la array como varible consumible de la función
//Se declara e inicializa la variable
const nombres =  ["juan","david","sebastian","camilo","paubla","juliana","camila","pedro","Pablo"];
//se crea la funcion y se le asigna la variable como insumo
// function saludar(nombres) {
//     nombres.forEach(nombre => {
//         console.log("Hola " + nombre)
        
//     });

// };
//saludar(nombres)
// forma de usar api de forma mas estaable
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })


// const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// const data = await response.json()
// console.log(data)


const tipo = "grass"
const response = await fetch(`https://pokeapi.co/api/v2/type/${tipo}/`)
const data = await response.json()
const contenido = JSON.stringify(data.pokemon)
// console.log(data.pokemon)

let lista = [];

function saludar(nombres) {
    nombres.forEach(nombre => {
        lista.push("Hola " + nombre.pokemon.name)
        
    });

};
saludar(data.pokemon)

lista = lista.toString()
// console.log(lista)

// fs.writeFile("./saludospokemon.txt", lista, (err)=>{console.log(err)})


fs.writeFile("./saludospokemon.json", contenido, (err)=>{console.log(err)})