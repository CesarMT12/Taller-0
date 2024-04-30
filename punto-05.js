//Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.


 
let operation;
let result;
let error;


do {   
       
      const num1 = parseFloat(prompt("Ingresa el primer número:"));
      operation = prompt ( 'Ingrese una operación (+, -, *, /)')
      const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    
    switch (operation) {
        case "+":
            result = num1 + num2;
            
            break;
        case "-":
            result = num1 - num2;
           
            break;
        case "*":
            result = num1 * num2;
            
            break;
        case "/":
            if ( num2 == 0 ) {
                alert ( 'No se puede dividir entre 0' );
                break;
            } 
                 
                result = num1 / num2;
            
            break;
                    
        default:
            alert ( "Opción inválida. Inténtalo nuevamente." );
            
    }

    if ( error ) { 
        console.log ( error )
    } 
    else {
        console.log (alert(`El resultado de ${num1} ${operation} ${num2} es ${result}`));
    }
    
    
    option = (prompt ('¿Desea realizar otra operación? S/N'))

} while ( option.toLowerCase === 's');

  




