// OPCIONAL - importa funciones que son exportadas en el archivo utils.js
const misFunciones = require('./scripts/utils')

// importa a express y cors
const express = require('express')
const cors = require('cors')

// crea aplicación usando express y puerto
const app = express()
const port = 3000

let transactionArr = []
let prestamosArr = []

//#region 
app.use(
  express.json()
)

app.use(cors());
//#endregion

app.get('/transactions', (req, res) => {
  console.log('en get');
  res.send(JSON.stringify(transactionArr));
})

app.post('/transactions', (req, res) => {  
  console.log('en post');
  let transaction = req.body;
 
  if (transaction.accion =='Calcular'){
    const peso = transaction.peso;
    const estatura = transaction.estatura;
    // calcula el IMC
    const imc = misFunciones.obtenerIMC(peso,estatura);
    // Crea objeto JavaScript
    const newData = {peso, estatura, imc};
    console.log( newData )
    // Adiciona el nuevo objeto JavaScript
    transactionArr.unshift(newData);
  }else{  // Se solicita mostrar el Historial
    console.log(transactionArr);  
  }
})

app.get('/prestamos', (req, res) => {
  console.log('en get prestamos');
  res.send(JSON.stringify(prestamosArr));
})

app.post('/prestamos', (req, res) => {
  console.log('en post prestamos');
  let prestamo_obj = req.body;
  
  if (prestamo_obj.accion == 'Calcular'){
    const nombre = prestamo_obj.nombre;
    const prestamo = parseFloat(prestamo_obj.prestamo);
    const meses = parseInt(prestamo_obj.meses);
    const interes = parseFloat(prestamo_obj.interes);
    const i = interes / 100; // Convertir porcentaje a decimal
    
    // Calcular la cuota usando la función
    const cuota = misFunciones.calcularCuotaPrestamo(prestamo, meses, i);
    
    // Crear objeto con el resultado
    const newPrestamo = {nombre, cuota, prestamo, meses, interes};
    console.log(newPrestamo);
    
    // Agregar al inicio del array
    prestamosArr.unshift(newPrestamo);
    
    // Formatear respuesta
    const resultado = `${nombre} - $ ${cuota.toFixed(2)} - $ ${prestamo} - ${meses} meses - interés ${interes}%`;
    res.json({resultado});
  }else{  // Se solicita mostrar el Historial
    console.log(prestamosArr);
    res.json({resultado: 'Historial mostrado en consola'});
  }
})

// se pone en escucha y despliega el primer mensaje
app.listen(port, () => {
  console.log('Estoy ejecutandome en http://localhost:'+port)
})