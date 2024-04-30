//Escribe un programa JavaScript que genere un número aleatorio entre 1 y 10 y le pida al usuario que lo adivine. El programa debe dar pistas al usuario si su suposición es demasiado alta o demasiado baja hasta que logre adivinar el número correcto.

function randomGenerator ( ){
    
    return  Math.floor ( Math.random () * 10 + 1 ) ;

}

function guess ( ){
    const randomNumber = randomGenerator ( );
    console.log ( randomNumber );
    
    
    let userNumber;
    let intentos = 0;

    while ( userNumber !== randomNumber ){
        intentos += 1; //intentos++, intentos = intentos + 1
        userNumber = parseInt( prompt ('Adivina un número entre 1 y 10 ') );
        
        if ( userNumber < randomNumber ) { 
            console.log ( 'El número que ingresaste es muy bajo' )
        }
        else if ( userNumber > randomNumber ) {
            console.log ( 'El número que ingresaste es muy alto')
        }
    }
    console.log ( `Adivinaste el número en ${intentos} intentos` )

}

guess ();