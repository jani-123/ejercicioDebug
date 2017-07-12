/* Debes pegar todo el código en main.js*/
var productos = [];
var records = document.getElementById('records');

// Constructor para generar un nuevo producto
function Producto(compra, cantidad) {
  this.compra = compra.toLowerCase(); // error linea 7 -- se coloco los ":" en ves del " = " --> error de sintaxis
  this.producttID = (productos.length + 1);
  this.cantidad = cantidad;
}

//Método para imprimir un producto en html
Producto.prototype.toHTML = function () {
  var html = '';
  html += this.compra.toUpperCase() + '<br>';
  html += this.cantidad + '<br>'; // error linea 16 se coloco la variable 'cantidades' la cual no existe lo correcto es 'cantidad' --> error de sintaxis
  html += '<br><br>'; //  
  return html; // error linea 18 -- se retornaba un string "html" en ves de la variable html --> error de logica 
}

//Función que une todas las compras guardadas en el array productos
function mergeHTML (){ 
  var html = '';
  for (i=0; i<productos.length; i++){// error linea 24 -- se puso en el for " , " en ves del " ; " --> error de sintaxis
    html += productos[i].toHTML(); // error linea 25 -- se puso [i,] la coma esta de mas lo correcto es [i] --> error de sintaxis
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html; // error linea 33 -- se puso el nombre de la variable incompleto htm siendo lo correcto html --> error de sintaxis
}

// Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
var addCompra = document.getElementById('nuevacompra');
addCompra.onclick = function() {
  var compra = prompt('Ingrese su nueva compra');
  var cantidad = prompt('Ingrese la cantidad');
  var product  = new Producto (compra, cantidad); // error linea 41 -- se puso la funcion Compra que no existe en ves del constructor Producto --> error de sintaxis
  productos.push(product);
  printHTML(product.toHTML());
};


// al hacerle click a mostrar todas las compras, imprime todas las compras en el html. ESTA ESTÁ BUENA, NO CAMBIAR NADA
var printAll = document.getElementById('print');
printAll.onclick = function() {
  printHTML(mergeHTML());
}
