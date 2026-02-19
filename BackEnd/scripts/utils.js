/*
*  Archivo utils.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 18-Junio-2024
*
*  Descripción: 
*  Proporciona funciones variadas y generacíon de paginas dinámicas, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

function obtenerIMC(peso, estatura){
    return peso/(estatura*estatura);
}

function crearPaginaRespuesta(peso, estatura, imc){
    let newIMC = imc.toFixed(2)
    const nPage = `
        <!DOCTYPE html>
        <head>
            <title>Ejemplo Backend</title>
            <style>
                body {
                    background-color: lightcyan;
                    font-size: 20px;
                }

                .elEstilo {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
                }
                    
                h1 {
                    color: darkgreen;
                    text-align: center;
                    font-size: 25px;
                }

                footer{
                    text-align: center;
                    font-size: 15px;
                }

                table {
                    width: 300px;
                    margin: 20px auto;
                    padding: 5px auto;
                    border: 2px solid;
                    align-content: center;
                }

                th, td, tr {
                    border: 1px solid;
                }

                textarea{
                    width: 300px;
                    height: 80px;
                    padding: 5px auto;
                }
            </style>    
        </head>
        <body>
            <main> 
                <div class="elEstilo">
                    <h1>Almacenamiento y calculo de IMCs</h1>
                    <!– la informacion se codificarán en tuplas clave=valor separadas por '&' –>
                    <form action="/transactions" enctype="application/x-www-form-urlencoded" method="post">
                        <table>
                            <caption>Calculadora Online</caption>
                            <tbody>
                                <tr>
                                    <td>Peso</td>
                                    <td><input type="text" value="${peso}" name="peso" required></td>
                                </tr>
                                <tr>
                                    <td>Estatura</td>
                                    <td> <input type="text" value="${estatura}" name="estatura" required></td>
                                </tr>                
                                <tr>
                                    <td>Acción:</td> 
                                    <td>   
                                        <input type="radio" value="Calcular" name="accion" checked>IMC
                                        </label><input type="radio" value="Historial" name="accion">Historial          
                                    </td>
                                </tr>      
                                <tr>
                                    <td colspan="2"><input type="submit"  value="Enviar"></td>              
                                </tr>                                 
                            </tbody>
                        </table>                          
                    </form>
                    <textarea readonly>Peso:${peso}  Altura:${estatura}  IMC:${newIMC}</textarea>
                </div>
            </main>
            <footer> 
                <hr>    
                Fuente propia para el curso de Estructura de Datos 1 en la Universidad Autónoma de Occidente
            </footer>
        </body>
        </html>`
    return nPage;
}

function calcularCuotaPrestamo(prestamo, n, i){
    // Fórmula: cuota = préstamo × [(1+i)^n × i] / [(1+i)^n - i]
    const unoPlusI = 1 + i;
    const unoPlusIPowN = Math.pow(unoPlusI, n);
    const cuota = prestamo * (unoPlusIPowN * i) / (unoPlusIPowN - i);
    return cuota;
}

// se indican las funciones a importar
module.exports = {obtenerIMC, crearPaginaRespuesta, calcularCuotaPrestamo};



