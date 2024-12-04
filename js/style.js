let myInterval;     // időzítő
let time_limit=5;  // játékidő másodpercben
let speed=2000;     // ezredmásodperc
let time;           // hátralévő másodperc


document.getElementById('uj').style.visibility = "hidden";
document.getElementById('end').style.visibility = "hidden";

var dobasok = 0;
var szam1 = 0;
var szam2 = 0;
var szam3 = 0;
var szam4 = 0;
var szam5 = 0;
var szam6 = 0;

function start(){
    document.getElementById('uj').style.visibility = "visible";
    document.getElementById('end').style.visibility = "visible";
    document.getElementById('start').style.visibility = "hidden";
    dobasok = 0;
    szam1 = 0;
    szam2 = 0;
    szam3 = 0;
    szam4 = 0;
    szam5 = 0;
    szam6 = 0;
    document.getElementById('dobasok').innerHTML = "Dobások száma: 0"
    document.getElementById('1').innerHTML = szam1;
    document.getElementById('2').innerHTML = szam2;
    document.getElementById('3').innerHTML = szam3;
    document.getElementById('4').innerHTML = szam4;
    document.getElementById('5').innerHTML = szam5;
    document.getElementById('6').innerHTML = szam6;
}
function end(){
    document.getElementById('uj').style.visibility = "hidden";
    document.getElementById('end').style.visibility = "hidden";
    document.getElementById('start').style.visibility = "visible";
}
function uj(){

    time=time_limit;
    myInterval=setInterval('asd()', Math.round(speed/time_limit,0));
    document.getElementById('uj').disabled = true;
    

}

function asd(){
    rnd = Math.floor(Math.random()*6) +1;
    document.getElementById("kocka").innerHTML="<img src='img/"+rnd+".png'>";
    if (time==0) time_stop();
    else time--;
 
 
}

function time_stop(){
    clearInterval(myInterval);
    var random = Math.floor(Math.random() * 6);
    dobasok = dobasok+1;
    document.getElementById('dobasok').innerHTML = "Dobások száma: "+dobasok

    if(random == 0)
    { 
        szam1 = szam1+1;
        document.getElementById('1').innerHTML = szam1;
    }
    else if(random == 1)
    {
        szam2 = szam2+1;
        document.getElementById('2').innerHTML = szam2;
    }
    else if(random == 2)
    {
        szam3 = szam3+1;
        document.getElementById('3').innerHTML = szam3;
    }
    else if(random == 3)
    {
        szam4 = szam4+1;
        document.getElementById('4').innerHTML = szam4;
    }
    else if(random == 4)
    {
        szam5 = szam5+1;
        document.getElementById('5').innerHTML = szam5;
    }
    else if(random == 5)
    {
        szam6 = szam6+1;
        document.getElementById('6').innerHTML = szam6;
    }
    document.getElementById('uj').disabled = false;
}