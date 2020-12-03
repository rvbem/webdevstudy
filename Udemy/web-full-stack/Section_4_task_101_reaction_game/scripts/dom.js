/*
document.getElementsByClassName("firstThreeElements")[2];
document.getElementById("thirdElemnt");
document.getElementsByTagName("li")[2];
document.querySelector(#thirdElemnt);
*/
var BgColor = "white";
function ChangeBgColor () {
    if (BgColor == "white"){
        document.getElementsByTagName("body")[0].style.backgroundColor = "green";
        BgColor = "green";
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        BgColor = "white";
    }
}
var changeBgColorBtn = document.getElementById("btn");
changeBgColorBtn.addEventListener("click", ChangeBgColor);