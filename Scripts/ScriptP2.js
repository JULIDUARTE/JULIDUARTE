let descuento = prompt("ingrese el producto que desea comprar");

if (descuento == "moto" || descuento == "carro") {
  alert("su descuento sera del 15%");
} else if (descuento == "bicicleta" || descuento == "patineta") {
  alert("su descuento sera del 10%");
} else if (descuento == "scooter electrico") {
  alert("su descuento sera del 5%");
} else {
  alert("ingrese el producto de nuevo");
}