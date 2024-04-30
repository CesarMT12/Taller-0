//Escribe un programa que genere una lista aleatoria de numeros y elimine todos los pares.
const cantidad = prompt ( 'Digita la cantidad de números deseada' )
let numberList = []
for ( let i = 0; i < cantidad; i++){ 

   let entero = Math.floor ( Math.random ( numberList ) * 10 ) ;
   numberList.push ( entero );
   
}


console.log ( numberList  ) 

let odd = [];
let par = []; 
let result = []

for ( i= 0; i < numberList.length ; i++ ) {
    if ( numberList [ i ] % 2 == 0 ) {
        par.push ( numberList );
    }
    else {
        odd.push ( numberList );
    }
    

}
console.log ( odd )

