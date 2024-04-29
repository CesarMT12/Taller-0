//Escribe un programa que tome dos números como variables y muestre cuál es el mayor de los dos.
let number1 = (parseInt ( prompt ( 'Ingresa el primer número' ) ))
let number2 = (parseInt ( prompt ( 'Ingresa el segundo número' ) ))

if ( number1 > number2 ) {
    alert ( number1 + ' ' + ' es el mayor ')

} 
else if ( number2 > number1 ) {
    alert ( number2 + ' ' + 'es el mayor')
}
else { 
    alert ( "Son números iguales. Por favor, ingresa cantidades diferentes" )
}
 
