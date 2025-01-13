const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}
function newFunction(value) {
    console.log('appending:', value);
}

function calculate(){
    display.value=eval(display.value)
   
}
function clearDisplay(){
    display.value ="";
   
}