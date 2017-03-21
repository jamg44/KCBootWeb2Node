
function suma(a, b, callback) {
  var dato = a + b;
  callback( dato);
}

suma(6, 10, function(resultado) {
  console.log(resultado);
});
