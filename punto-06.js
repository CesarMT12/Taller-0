//Escribe un programa que tome como entrada tus nombres y apellidos completos y cuente cuantos caracteres tiene, sin tener en cuenta los espacios.

function sentenceWithoutSpaces ( sentence ) {
    let accountant = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence [ i ] !== ' ') {
        accountant++;
      }
    }
    return accountant;
  }

  let sentence = ( prompt('Escriba una oración'));
  let letterContent = sentenceWithoutSpaces ( sentence )
  console.log (`La frase '${ sentence }' tiene ${ letterContent } letras sin contar los espacios`)