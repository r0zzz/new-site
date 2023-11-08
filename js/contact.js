const form = document.querySelector('#contact');
const submit = document.querySelector('button');
const nameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const confirmation = document.getElementById("sent");

const publicKey = "6CELj_EN5yCYBucaB";
const serviceID = "service_9ma90i8";
const templateID = "template_ghyspfh";


emailjs.init(publicKey);

form.addEventListener("submit", e => {
    e.preventDefault();
    confirmation.innerHTML = "Sending Message";

    const inputVal = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }

    emailjs.send(serviceID, templateID, inputVal)
        .then(() => {
            confirmation.innerHTML = "Message Sent";

            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }, (error) => { 
            console.log(error);
            confirmation.innerHTML = "Something went wrong"; 
        })
})