//Escribe un programa que tome un string como entrada y cuente el número de vocales que contiene.

function vocalesN( str ){
    let letras = str.split ( '' ); 

    return  contar ( letras ) 
}


function contar( array ) {

       let vocales = array.filter(  letra => [ 'a', 'e', 'i', 'o', 'u' ].includes( letra.toLowerCase() ) ) ;

       console.log ( 'Las vocales que contiene son: ' + vocales.length )
}

let vocalesCantidad = vocalesN ( (prompt ('ingrese una frase')) )






