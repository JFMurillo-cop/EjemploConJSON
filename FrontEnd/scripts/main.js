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

const formPrestamo = document.getElementById("generarPrestamo");

formPrestamo.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let nombre = document.getElementById("elNombre").value;
    let prestamo = document.getElementById("elPrestamo").value;
    let meses = document.getElementById("losMeses").value;
    let interes = document.getElementById("elInteres").value;
    
    let lasAccionesPrestamo = document.getElementsByName("accionPrestamo");
    let accion;
    for(let i=0; i<lasAccionesPrestamo.length; i++){
        if (lasAccionesPrestamo[i].checked){
            accion = lasAccionesPrestamo[i].value;
            break;
        }
    }
    
    let prestamo_obj = { nombre, prestamo, meses, interes, accion };
    let prestamoJson = JSON.stringify(prestamo_obj);
    console.log(prestamoJson);
    
    fetch('http://localhost:3000/prestamos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'            
        },
        body: prestamoJson
    })
    .then(response => response.json())
    .then(data => {
        if(data && data.resultado) {
            document.getElementById("resultadoPrestamo").value = data.resultado;
        }
    })
    .catch(error => console.error('Error:', error));
})