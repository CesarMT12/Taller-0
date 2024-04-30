//Escribe un programa que genere una lista aleatoria de numeros y elimine todos los pares.
let random;
let randomList = [];
let oddList = [];

for( let i = 0; i < 10; i++ ) {
    random = Math.round( Math.random() * 10 );       
    randomList.push( random);

    
    if( randomList[ i ] % 2 != 0 ) {
        oddList.push(randomList[ i ] );      
    }
}

console.log( randomList );
console.log( oddList );


