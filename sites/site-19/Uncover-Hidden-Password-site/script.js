
"use strict";

let userPassword = document.getElementById("password");
let confirmUserPassword = document.getElementById("password2");
let showPassword = false;
const createPasswordBtn = document.getElementById("createPassBtn");
const clearPasswordButton = document.getElementById("clearbtn");

function getRandomPassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/@#$%&()+&<>:";
    let passwordLength = 17;
    let password = "";
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    userPassword.value = password;
    confirmUserPassword.value = password;
}

function getUserPassword() {
    if(userPassword.value != "") {
        userPassword.value = userPassword.value;
        confirmUserPassword.value = userPassword.value;
    }
    else if(userPassword.value == "") {
        confirmUserPassword.value = userPassword.value;
    }
}

function uncoverPassword() {
    if(showPassword == false) {
        userPassword.setAttribute("type", "text");
        confirmUserPassword.setAttribute("type", "text");
        showPassword = true;
        document.querySelector(".onhiddenPasswordButton").innerHTML = "Hidden Password";
        userPassword.removeAttribute("readonly", "readonly");
    }
    else if(showPassword == true) {
        userPassword.setAttribute("type", "password");
        confirmUserPassword.setAttribute("type", "password");
        showPassword = false;
        document.querySelector(".onhiddenPasswordButton").innerHTML = "Uncover Password";
        userPassword.setAttribute("readonly", "readonly");
    }  
}

function hiddenPassword() {
    userPassword.setAttribute("type", "password");
    userPassword.setAttribute("readonly", "readonly");
    confirmUserPassword.setAttribute("type", "password");
}

// userPassword.addEventListener('input', getRandomPassword); // не раскомментировать!
userPassword.addEventListener('input', getUserPassword);
createPasswordBtn.addEventListener('click', getRandomPassword);
clearPasswordButton.addEventListener('click', () => {
    if(userPassword.value != '') {
        userPassword.value = '';
        confirmUserPassword.value = '';
    }
})

hiddenPassword();
getRandomPassword();