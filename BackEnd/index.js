// OPCIONAL - importa funciones que son exportadas en el archivo utils.js
const misFunciones = require('./scripts/utils')

// importa a express y cors
const express = require('express')
const cors = require('cors')

// crea aplicación usando express y puerto
const app = express()
const port = 3000

let transactionArr = []

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

// se pone en escucha y despliega el primer mensaje
app.listen(port, () => {
  console.log('Estoy ejecutandome en http://localhost:'+port)
})