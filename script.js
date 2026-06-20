
window.addEventListener('load', ()=>{
   let name = getCookie("Name");
   let email = getCookie("Email");
   if(name && email){
       signUpPage.style.display = "none";
       signedInPage.style.display = "block";

       let userName = document.getElementById("userNameHello");
       userName.innerHTML = "Hello, " + name + "!";
       let userEmail = document.getElementById("emailHello");
       userEmail.innerHTML = "Email: "+ email;

        return true;
   }
});
let mode = document.getElementById("modes");
mode.addEventListener("change", function(e){
    document.body.setAttribute("data-theme", e.target.value);
    setCookie("Mode", e.target.value);
});
mode.value = getCookie("Mode");
document.body.setAttribute("data-theme", getCookie("Mode"));
let signUpPage = document.getElementById("SignUpForm");
let signedInPage = document.getElementById("signedUpUser");
signedInPage.style.display = "none";

let isValid = true;
let divHasError = document.getElementById("HasError");
divHasError.style.display = "none";

let name = "";
let email = "";

document.getElementById("name").addEventListener("change", function (event) {
    name = event.target.value;
    name = name.trim();

    const name_error = document.getElementById("nameError");
    name_error.style.color = "red";

    if(name.length<2 || name.length>20){
        isValid = false;
        name_error.innerHTML = "Name must be longer than 2 and less than 20 characters";
    }else{
        isValid = true;
        name_error.innerHTML="";
    }
});

document.getElementById("email").addEventListener("change", function (event) {
    email = event.target.value;
    email = email.trim();
    const error_email = document.getElementById("emailError");
    error_email.style.color = "red";

    if (!email.match(/[a-zA-Z]{3}@[a-zA-Z].[a-zA-Z]/gm) ) {
        error_email.textContent = "Enter a valid email address";
        isValid = false;
    }else {
        error_email.textContent = "";
        isValid = true;
    }
});

document.getElementById("password").addEventListener("change", function (event) {
    let password = event.target.value;
    const error_password = document.getElementById("passwordError");
    const specialSymbols = "*/-+.,<>?!#@$%^&"
    let isPasswordValid = true
    let hasSpecial = false;
    let hasUpper = false;

    for (let i = 0; i < specialSymbols.length; i++) {
        if (password.includes(specialSymbols[i]) ) {
            isPasswordValid = true;
            hasSpecial = true;
            break;
        } else {
            isPasswordValid = false;
            hasSpecial = false;
        }
    }
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' &&
            password[i] <= 'Z' ) {
            isPasswordValid = true;
            hasUpper = true;
            break
        } else {
            isPasswordValid = false;
            hasUpper = false;
        }
    }

    let error = "";

    if (!hasSpecial) {
        error += "No special characters. ";
    }

    if (!hasUpper) {
        error += "No uppercase characters. ";
    }
    error_password.innerHTML = error;
    isValid = isPasswordValid;
});

let buttonSighUp = document.getElementById("signUp");
buttonSighUp.addEventListener("click", ()=> {
    if(!isValid){
        divHasError.style.display = "block";
        divHasError.style.color = "red";
        divHasError.innerHTML = "Check the fields!";
        return false;
    }

    setCookie("Name", name,1);
    setCookie("Email", email,1);
    window.location.reload();

});

let buttonExit = document.getElementById("exit");
buttonExit.addEventListener("click", ()=>{
    signUpPage.style.display = "block";
    signedInPage.style.display = "none";
    deleteCookie("Name");
    deleteCookie("Email");
    deleteCookie("Mode");
    window.location.reload();
});