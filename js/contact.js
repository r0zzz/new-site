const form = document.querySelector('#contact');
const submit = document.querySelector('button');
const nameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const confirmation = document.getElementById("sent");

// emailjs ids to access email service
const publicKey = "6CELj_EN5yCYBucaB";
const serviceID = "service_9ma90i8";
const templateID = "template_ghyspfh";


emailjs.init(publicKey);

form.addEventListener("submit", e => { // get input when clicked
    e.preventDefault();
    confirmation.innerHTML = "Sending Message";

    const inputVal = {
        name: nameInput.value, // name input value
        email: emailInput.value, // email inpput value
        message: messageInput.value // message input value
    }

    emailjs.send(serviceID, templateID, inputVal) // pass value to process
        .then(() => {
            confirmation.innerHTML = "Message Sent";

            nameInput.value = ""; // reset values to blank after sending email
            emailInput.value = "";
            messageInput.value = "";
        }, (error) => { 
            console.log(error);
            confirmation.innerHTML = "Something went wrong"; 
        })
})