const userEmail = document.querySelector("#email");
const myPassword = document.querySelector("#password");
const signIn_btn = document.querySelector("#signIn");

input_email = "appclick@gmail.com";
input_password = "1234AppClick"

signIn_btn.addEventListener("click", function(){
    const userValue = userEmail.value;
    const passwordValue = myPassword.value;

    if (userValue === input_email && passwordValue === input_password){
        window.location.href = "https://www.lanreiluyemi.com/";
    } else {
        alert("Incorrect login credentials");
    }
});