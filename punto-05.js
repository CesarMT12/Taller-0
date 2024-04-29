//Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.


 
let operation;
let result;



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
            if ( num2 !== 0 ) {
                result = num1 / num2;
            } 
            else {
                alert ( 'No se puede dividir entre 0' )
            }
            break;
                    
        default:
            alert ( "Opción inválida. Inténtalo nuevamente." );
            
    }
    alert(`El resultado de ${num1} ${operation} ${num2} es ${result}`);

} while (true);

  




