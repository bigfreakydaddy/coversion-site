/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let startValue = document.getElementById("amount-input").valueAsNumber

function convertLength(value){
    return `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`
}
    
function convertVolume(value){
    return `${value} liters = ${(value * .264).toFixed(3)} gallons | ${value} gallons = ${(value / .264).toFixed(3)} liters`
}
    
function convertMass(value){
    return `${value} kilogram = ${(value * 2.204).toFixed(3)} pound | ${value} kilogram = ${(value / 2.204).toFixed(3)} pound`
}
    
let length = document.getElementById("length-conversion")
length.innerText = convertLength(0)

let volume = document.getElementById("volume-conversion")
volume.innerText = convertVolume(0)

let mass = document.getElementById("mass-conversion")
mass.innerText = convertMass(0)

function getConversion(){

    document.getElementById("convert-btn").addEventListener("click", function(){
             let userInput = document.getElementById("amount-input").valueAsNumber
             mass.innerText = convertMass(userInput)
             volume.innerText = convertVolume(userInput)
             length.innerText = convertLength(userInput)
        
    });  
}
