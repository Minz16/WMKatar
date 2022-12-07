const ausgang = document.getElementById("ausgang");
const eins = document.getElementById("auswahleins");
const zwei = document.getElementById("auswahlzwei");
const music = document.getElementById("music");
const platte = document.getElementById("platte");


var m = null;
var n = null;
var mwert = 0;
var nwert = 0;

var sieger = none;

//Unfertig

function zuteiler(x) {
    if (x=="de"){
        return 0;
    } else if (x=="fr"){
        return 1;
    } else if (x=="ch"){
        return 2;
    } else if (x=="ma"){
        return 3;
    } else if (x=="ar"){
        return 4;
    } else if (x=="au"){
        return 5;
    } else if (x=="be"){
        return 6;
    } else if (x=="br"){
        return 7;
    } else if (x=="cr"){
        return 8;
    } else if (x=="dk"){
        return 9;
    } else if (x=="ec"){
        return 10;
    } else if (x=="en"){
        return 11;
    } else if (x=="gh"){
        return 12;
    } else if (x=="ir") {
        return 13;
    } else if (x=="jp") {
        return 14;
    } else if (x=="cm") {
        return 15;
    } else if (x=="ca") {
        return 16;
    } else if (x=="qa") {
        return 17;
    } else if (x=="hr") {
        return 18;
    } else if (x=="mx") {
        return 19;
    } else if (x=="nl") {
        return 20;
    } else if (x=="pl") {
        return 21;
    } else if (x=="pt") {
        return 22;
    } else if (x=="sa") {
        return 23;
    } else if (x=="sn") {
        return 24;
    } else if (x=="rs") {
        return 25;
    } else if (x=="es") {
        return 26;
    } else if (x=="kr") {
        return 27;
    } else if (x=="tn") {
        return 28;
    } else if (x=="uy") {
        return 29;
    } else if (x=="us") {
        return 30;
    } else if (x=="wa") {
        return 31;
    }
}

function werte(x) {
    if (x=="de"){
        return 0;
    } else if (x=="fr"){
        return 1;
    } else if (x=="ch"){
        return 2;
    } else if (x=="ma"){
        return 3;
    } else if (x=="ar"){
        return 4;
    } else if (x=="au"){
        return 5;
    } else if (x=="be"){
        return 6;
    } else if (x=="br"){
        return 7;
    } else if (x=="cr"){
        return 8;
    } else if (x=="dk"){
        return 9;
    } else if (x=="ec"){
        return 10;
    } else if (x=="en"){
        return 11;
    } else if (x=="gh"){
        return 12;
    } else if (x=="ir") {
        return 13;
    } else if (x=="jp") {
        return 14;
    } else if (x=="cm") {
        return 15;
    } else if (x=="ca") {
        return 16;
    } else if (x=="qa") {
        return 17;
    } else if (x=="hr") {
        return 18;
    } else if (x=="mx") {
        return 19;
    } else if (x=="nl") {
        return 20;
    } else if (x=="pl") {
        return 21;
    } else if (x=="pt") {
        return 22;
    } else if (x=="sa") {
        return 23;
    } else if (x=="sn") {
        return 24;
    } else if (x=="rs") {
        return 25;
    } else if (x=="es") {
        return 26;
    } else if (x=="kr") {
        return 27;
    } else if (x=="tn") {
        return 28;
    } else if (x=="uy") {
        return 29;
    } else if (x=="us") {
        return 30;
    } else if (x=="wa") {
        return 31;
    }
}

function rechnen(){
    n=eins.value;
    m=zwei.value;
    mwert=werte(m);
    nwert=werte(n);


    //wm = mwert/(mwert+nwert)
    if ((Math.floor(Math.random() * (mwert+nwert)) + 1) <= mwert) {
        sieger = zuteiler(m);
    } else {
        sieger = zuteiler(n);
    }

    ausgang.innerHTML = `${eins.options[sieger].innerHTML} hat gewonnen!`
}







var e = true;
function play() {
    if (e) {
        music.play();
        platte.style.animation = "dreh 1s infinite linear";
        e = false;
    } else {
        music.pause();
        e = true;
        platte.style.animation = "none"
    }
}