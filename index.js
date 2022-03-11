/*
- array to hold all possible chars
- buttton to generate 4 random password options
- display password option 
- stretch: ability to set the password length 
- stretch: 1-click copy password to the clipboard
*/

let allChar = ["!","#","$","%","&","(",")","*","+",",","–",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","l","}","~"]

let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let pass3 = document.getElementById("pass3")
let pass4 = document.getElementById("pass4")

function genPass(){
    for(let i = 0; i < 12; i++){
        pass1.textContent += allChar[Math.floor(Math.random()*allChar.length)+1]
        pass2.textContent += allChar[Math.floor(Math.random()*allChar.length)+1]
        pass3.textContent += allChar[Math.floor(Math.random()*allChar.length)+1]
        pass4.textContent += allChar[Math.floor(Math.random()*allChar.length)+1]
    }
    console.log(pass1.textContent)
    console.log(pass2.textContent)
    console.log(pass3.textContent)
    console.log(pass4.textContent)
}