//Escribe un programa que calcule el factorial de un número.
let number = prompt ( 'Ingrese el número del cual desea calcular el factorial' );
let factorial = 1;

 for ( let i = number; i > 0; i-- ){
    
        factorial = factorial *i ;
    
    
 }
 console.log (`${ factorial } es el factorial de ${ number }`)