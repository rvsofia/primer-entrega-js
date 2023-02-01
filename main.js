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