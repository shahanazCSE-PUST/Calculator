const display=document.getElementById('result-id');
function one(){
    display.innerText += 1;
}
function two(){
    display.innerText += 2;
}
function three(){
    display.innerText += 3;
}
function four(){
    display.innerText += 4;
}
function five(){
    display.innerText += 5;
}
function six(){
    display.innerText += 6;
}
function seven(){
    display.innerText += 7;
}
function eight(){
    display.innerText += 8;
}
function nine(){
    display.innerText += 9;
}
function zero(){
    display.innerText += 0;
}
function dot(){
    display.innerText += '.';
}
function plus(){
    display.innerText += '+';
}
function minus(){
    display.innerText += '-';
}
function multi(){
    display.innerText += '*';
}
function div(){
    
    display.innerText += '/';
}
function modulo(){
    display.innerText += '%';
}
function clr(){
    display.innerText = '';
}
function equal() {
    var result = eval(display.innerText);
    display.innerText=result;

}

    
