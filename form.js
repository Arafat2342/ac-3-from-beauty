function validate(){

    event.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msg = document.getElementById("message");

let message ='';

if (email === '') {
     message = "Wrong username or email.";
     msg.style.color =' red ';
} else if (password === '') {
    message = "invalid password.";
    msg.style.color =' red ';
}else if (age === '') {
    message = "invalid age.";
    msg.style.color =' red ';
} else {
    message = "Succesful."
    msg.style.color = "green";
 }

 msg.innerText = message;
}