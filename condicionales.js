// Variables
let topping = prompt("Ingrese el topping (Oreo, KitKat, Kinder):");
let precio = 0;
let precioFinal = 0;
let helado = 0;  // Valor numérico del helado

// Asignar precio según el topping
if (topping === "Oreo") {
    precio = 10;
} else if (topping === "KitKat") {
    precio = 15;
} else if (topping === "Kinder") {
    precio = 25;
} else {
    console.log("No tenemos este topping");
    process.exit(1);  // Salir del programa si no hay topping válido
}

// Calcular precio final
precioFinal = precio + helado;
console.log("El helado cuesta $" + precioFinal);

// Simular pedido con switch
let pedido = prompt("¿Qué desea pedir? (carne, pescado, verdura):");

switch (pedido) {
    case "carne":
        console.log("Como bebida, le ofrecemos vino tinto.");
        break;
    case "pescado":
        console.log("Como bebida, le ofrecemos vino blanco.");
        break;
    case "verdura":
        console.log("Como bebida, le ofrecemos agua.");
        break;
    default:
        console.log("Elija carne, pescado o verdura.");
}

// Usar un ciclo for y agregar un elemento a un array
let datos = [1, 2, 3, 4, 5];
for (let i = 0; i < datos.length; i++) {
    datos.push(datos[i] * 2);
}

// Recorrer el array modificado
for (let i = 0; i < datos.length; i++) {
    console.log(datos[i]);
}

// Usar un ciclo while
let numero = 5;
while (numero < 11) {
    console.log(numero + " es más chico que 11");
    numero++; // Incrementar la variable para evitar bucle infinito
}