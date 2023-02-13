/* RESTAURANTE COMENSALAES */

/* - - Primer Entrega - - */

/*
let nombre = prompt ("Nombre: ")
let mail = prompt ("Correo Electronico:")
console.log (nombre + mail)

let cantidadComensales = prompt ("Ingrese la cantidad de Comensales")
console.log (cantidadComensales)

if (cantidadComensales == 0)
{
    alert ("Ingrese un número mayor a 0");
    cantidadComensales = prompt ("Ingrese Cantidad");
};

while (cantidadComensales > 0 )
{
    if (cantidadComensales <= 7)
    {
        alert ("Su reserva es de " + (cantidadComensales));
    }
    break;

};
*/


/* - - Segunda Entrega - - */

class cliente {
    constructor(nombre, apellido, dni, comensales, mail){
        this.nombre= nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.comensales=comensales;
        this.mail=mail;
    }
}

const nicolas= new cliente("Nicolas", "Perez", 23456765, 4, "nicolas@gmail.com");
const maria= new cliente ("Maria", "Rodriguez", 34567898, 3, "maria@gmail.com");
const martin= new cliente ("Martin", "gonzales", 12343234, 2, "martin@gmail.com");
const santiago= new cliente ("Santiago", "Vazquez", 45432343, 2, "santiago@gmail.com");

const arrayClientes= [nicolas, maria, martin, santiago]
console.log(arrayClientes);

//Funcion con Opciones mas bienvenida

function menu() {
    alert("Bienvenido al Restaurante");
    let opcion= parseInt(prompt("Ingrese la opcion deseada:\n 1)Nueva Reserva \n 2) Cancelar Reserva \n 3) Modificar Reserva \n 4) Salir" ))
    return opcion;
}

//Funcion Nueva Reserva
function altaReserva() {
    let nombre= prompt("Ingrese su Nombre:");
    let apellido= prompt("Ingrese su Apellido:");
    let dni= prompt("Ingrese su DNI:");
    let comensales= parseInt(prompt("Ingrese la cantidad de comensales:"));
    let mail= prompt("Ingrese su Correo Electronico");
    let Cliente= new cliente(nombre, apellido, dni, comensales, mail);

    arrayClientes.push(Cliente);
    console.log(arrayClientes);
}


//Funcion Cancelar Reserva
function bajaReserva() {
    let dni= parseInt(prompt("Ingrese el DNI del cliente: "))
    let cliente = arrayClientes.find(cliente=> cliente.dni===dni)
    let indice= arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1)
    console.log(arrayClientes);

    alert("Cancelamos su reserva");
}


// Funcio Modificar reserva
function modificacionReserva() {
    let dni= parseInt(prompt("Ingrese su DNI"))
    let Cliente = arrayClientes.find(Cliente=> Cliente.dni===dni)
    let indice= arrayClientes.indexOf(Cliente);
    let nombre= prompt("Ingrese su nombre:");
    let apellido= prompt ("Ingrese Su apellido:");
    let comensales= prompt("Ingrese cantidad de comensales:");
    let mail= prompt("Ingrese su Correo Electronico");
    let reservaModificada= new cliente (nombre, apellido, dni, comensales, mail)
    arrayClientes.splice(indice, 1, reservaModificada)
    console.log(arrayClientes);

    alert("Modificamos su reserva");
}

//Funcion para Salir 
function salir() {
    alert("Graciasa por su reserva")
    
}

//Programa

let opcion= menu();

switch (opcion) {
    case 1: altaReserva();
        break;
    case 2: bajaReserva();
        break
    case 3: modificacionReserva();
        break
    case 4: salir()
        break
    default: alert("Opcion incorrecta")
        break;
}