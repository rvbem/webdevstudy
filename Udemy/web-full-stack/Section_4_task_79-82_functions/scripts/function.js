/*
var cnt = 30;
while (cnt > 0) {
    console.log(cnt);
    cnt-=2;
}
for (i = 30; i >= 0; i-=2){
        console.log(i);
}
*/
/*
function isNumberOdd (num) {
    if(num % 2 == 0){
        console.log(num % 2);
        console.log(true);
    } else {
        console.log(num % 2);
        console.log(false);
    }
}
isNumberOdd(7);
*/
/*
function factorial (num){
    var result = 1;
    if (num == 0){
        console.log(result);
    } else {
        var cnt = 1;
        for (cnt = 1; cnt <= num; cnt++){
            result = result * cnt;
        }
        console.log("res "+ result);
    }
}
factorial(7);
*/

function ChangеSpaceToUnderscore(text){
    var result = [];
    for(symPos = 0; symPos < text.length; symPos++){
         if(text[symPos] == ' '){
            result.push('_');
        } else {
            result.push(text[symPos]);
        }
    }
    console.log(result.join(''));
};
ChangеSpaceToUnderscore('Роман не крутой');