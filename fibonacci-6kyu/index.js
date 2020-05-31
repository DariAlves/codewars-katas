/*
    The function 'fibonacci' should return an array of fibonacci numbers. 
    The function takes a number as an argument to decide how many no. of elements to produce. 
    If the argument is less than or equal to 0 then return empty array
*/

function fibonacci(n) {
    let a = 0,
        b = 1,
        array = [];

    for (let i = 0; i < n; i++) {
        array.push(a);
        a = b - a;
        b = a + b;
    }
    
    return array;
}
