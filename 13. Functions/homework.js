// homework 
//N1
function maxNumber (a , b) {
    if (a === undefined || b === undefined){
    return ("no info"); 
    }
    return Math.max (a, b);
}
console.log(maxNumber());

//=======
//N2 
function changeNumber (a, b) {
    if (a) return console.log((`${b}, ${a}`));
    else console.log((`${a}, ${b}`));
} 
changeNumber(15, 25)
