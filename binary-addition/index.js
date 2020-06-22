/*
    Implement a function that adds two numbers together and returns their sum in binary. 
    The conversion can be done before, or after the addition.

    The binary number returned should be a string.
*/

/*
    toString() - converte um número em uma string. Pode receber parametros para indicar a base(2 - 36)
    toString(2) - o número será mostrado como um binário
    toString(8) - o número será mostrado como um octal
    toString(16) - o número será mostrado como um hexadecimal

*/


function addBinary(a,b) {
    return (a + b).toString(2)
}



