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

*/
 var cars = [
     {
         carProduces: "mazda",
         carModel: "6",
         color: "red",
         year: 2017,
         isSelled: false
     },
     {
        carProduces: "mercedes",
        carModel: "c300",
        color: "grey",
        year: 2010,
        isSelled: true
    },
    {
        carProduces: "opel",
        carModel: "astra",
        color: "green",
        year: 2016,
        isSelled: true
    },
    {
        carProduces: "fiat",
        carModel: "doblo",
        color: "white",
        year: 2018,
        isSelled: false
    }
 ]
/*
for (var i = 0; cars.length; i++){
    if(cars[i].isSelled === false){
        console.log(cars[i]);
    };
};
*/

cars.forEach(function(car) {
    if (car.isSelled === false){
        console.log(car);
    };
});
