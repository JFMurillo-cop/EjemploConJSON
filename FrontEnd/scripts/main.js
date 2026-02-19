/*
*  Archivo main.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 5-Julio-2024
*
*  Descripción: 
*  Logico frontEnd para suministrar datos JSON, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

const formElement = document.getElementById("generarTransaccion");

formElement.addEventListener('submit',(event) =>{
    // para que no se recarge la pagina
    event.preventDefault();
    let peso = document.getElementById("elPeso").value;
    let estatura = document.getElementById("laEstatura").value;
    // por ser un radio button
    let lasAcciones = document.getElementsByName("accion");
    let accion;
    for(let i=0; i<lasAcciones.length; i++){
        if (lasAcciones[i].checked){
            accion = lasAcciones[i].value;
            break;
        }
    }
    
    let transaction = { peso, estatura, accion };
    let transactionJson = JSON.stringify(transaction);
    console.log(transactionJson);
    fetch('http://localhost:3000/transactions',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'            
          },
        body: transactionJson
    })    
})