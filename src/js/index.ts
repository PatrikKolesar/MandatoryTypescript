let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("input");
let outputElement: HTMLOutputElement = <HTMLOutputElement> document.getElementById("output");

function toOunces():void{

    let input:string = inputElement.value;  
    let output:number = parseFloat(input)/28.34952;
    outputElement.innerHTML = output.toString();

}

function toGrams():void{

    let input:string = inputElement.value;  
    let output:number = parseFloat(input)*28.34952;
    outputElement.innerHTML = output.toString();

}

let button1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button1");
let button2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");

button1.addEventListener("click",toOunces);
button2.addEventListener("click",toGrams);