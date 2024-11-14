function validate() {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msg = document.getElementById("message");

    let message = '';  

    if (email === '') {
        message ="Please enter a valid email address.";
        msg.style.color = 'red';
    } 
    else if (password === '') {
        message = "Password must be at least 8 characters long.";
        msg.style.color = 'red';
    } 
    else if (age === '') {
        message = "Age must be between 6 and 60.";
        msg.style.color = 'red';
    } 
    else {
        message = "Sign-in successful!";
        msg.style.color = 'green';
    }

    msg.innerText = message;

}