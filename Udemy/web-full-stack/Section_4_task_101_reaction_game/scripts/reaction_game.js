var btn = document.getElementById("btn");

var colors = [
    {
        name: "red",
        color: "#ff1100",
    },
    {
        name: "green",
        color: "#8bc34a",
    },
    {
        name: "blue",
        color: "#00ecff",
    },
    {
        name: "yellow",
        color: "#ffeb3b",
    }
]

var figures = [
    {
        id                 : 1,
        name               : "rectangle",
        'width'            : null,
        'height'           : null,
        'backgroundColor'  : null,
        'creator'          : function () {
            this.width = getRandomInRange (50, 100) + "px";
            this.height = getRandomInRange (50, 100) + "px";
            this.backgroundColor = colors[getRandomInRange(1,4)-1].color;
        }
    },
    {
        id                 : 2,
        name               : "square",
        'width'            : null,
        'height'           : null,
        'backgroundColor'  : null,
        'creator'          : function(){
            this.width = getRandomInRange(50, 100) + "px";
            this.height = this.width;
            this.backgroundColor = colors[getRandomInRange(1,4)-1].color;
        }
    },
    {
        id                 : 3,
        name               : "circle",
        'width'            : null,
        'heght'            : null,
        'borderRadius'     : null,
        'backgroundColor'  : null,
        'creator'          : function(){
            this.width = getRandomInRange (50, 100) + "px";
            this.height = this.width;
            this.borderRadius = this.width;
            this.backgroundColor = colors[getRandomInRange(1,4)-1].color;
        }
    },
    {
        id                : 4,
        name              : "oval",
        'width'           : null,
        'height'          : null,
        'borderRadius'    : null,
        'backgroundColor' : null,
        'creator'         : function(){
            var width = getRandomInRange(50, 100);
            var height = getRandomInRange(50, 100);
            this.width = width + "px";
            this.height = height + "px";
            this.borderRadius = width/2 + "px / " + height/2 + "px";
            this.backgroundColor = colors[getRandomInRange(1,4)-1].color;
        }
    },
    {
        id             : 5,
        name           : "triangle-up",
        'width'        : "0px",
        'height'       : "0px",
        'borderLeft'   : "50px solid rgba(255,255,255,0)",
        'borderRight'  : "50px solid rgba(255,255,255,0)",
        'borderBottom' : "100px solid red",
        'creator'      : function(){
        }
    },
    {
        id             : 6,
        name           : "trapezoid",
        'borderBottom' :  "100px solid red",
        'borderLeft'   :  "50px solid transparent ",
        'borderRight'  :  "50px solid transparent",
        'height'       :  "0",
        'width'        :  "100px",
        'creator'      : function(){
        }
    }
]

function applyFigure (figureId) {
    btn.style.width           = null;
    btn.style.height          = null;
    btn.style.border          = null;
    btn.style.borderRadius    = null;
    btn.style.borderLeft      = null;
    btn.style.borderRight     = null;
    btn.style.borderBootom    = null;
    btn.style.backgroundColor = null;
    applyedFigure             = figures[figureId - 1];
    applyedFigure.creator();
    btn.style.width           = applyedFigure.hasOwnProperty("width") ? applyedFigure.width : null;
    btn.style.height          = applyedFigure.hasOwnProperty("height") ? applyedFigure.height : null;
    btn.style.backgroundColor = applyedFigure.hasOwnProperty("backgroundColor") ? applyedFigure.backgroundColor : null;
    btn.style.borderRadius    = applyedFigure.hasOwnProperty("borderRadius") ? applyedFigure.borderRadius : null;
    btn.style.borderLeft      = applyedFigure.hasOwnProperty("borderLeft") ? applyedFigure.borderLeft : null;
    btn.style.borderRight     = applyedFigure.hasOwnProperty("borderRight") ? applyedFigure.borderRight : null;
    btn.style.borderBottom    = applyedFigure.hasOwnProperty("borderBottom") ? applyedFigure.borderBottom : null;
}

function reCreateFigure () {
    applyFigure(getRandomInRange(1, 6));
    btn.style.marginTop   = `${getRandomInRange(5, 85)}%`;
    btn.style.marginLeft  = `${getRandomInRange(5, 85)}%`;
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener("click", reCreateFigure);
reCreateFigure();


var lastClickTime    = null;
var currentClickTime = null;
var lastClickPeriod  = document.querySelector("#react_cnt");

function CountClickTime () {
    if (lastClickTime == null){
        lastClickTime = Date.now();
    } else {
        currentClickTime           = Date.now();
        lastClickPeriod.innerHTML  = (currentClickTime - lastClickTime)/1000;
        lastClickTime              = currentClickTime;
    }
}

btn.addEventListener("click", CountClickTime);
