//Escribe una función que tome un string como entrada y devuelva la misma cadena con las letras en orden inverso (sin usar funciones de JavaScript).

function reverse ( string ) {
    
    let newString = ''

    for ( let i = string.length -1; i >= 0; i -- ){ 
        newString = newString + string [ i ];
        
    }

    return ( newString )
}

let string = reverse (prompt ( 'Ingrese una palabra o frase' ) ); 
console.log ( string )

