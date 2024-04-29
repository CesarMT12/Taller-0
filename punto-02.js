//Escribe un programa que genere la tabla de multiplicar de un número dado.
function multiplicationTable ( number ) {
    
    for ( i = 1; i <= 10; i++) {
        const result = number * i;
        console.log ( `${ number } x ${ i } = ${ result }` )
    }
        
}

const enter = ( prompt ('Ingrese un valor sin decimal') )
multiplicationTable ( enter )