// 10. Escriba un programa que tome dos números base y altura para calcular el area de un triángulo

let base = prompt ('Ingrese la base del triángulo');
let altura = prompt ('Ingrese la altura del triángulo');

function areaTriangulo( base, altura ) {
    const area = ( base * altura ) / 2;

    return area;
}


console.log( `El area del triangulo de base ${ base } y altura ${ altura } es: ${ areaTriangulo( base, altura ) }` );