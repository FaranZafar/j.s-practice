// Initialize EmailJS
emailjs.init({
    publicKey: "CYrd5eCt2wB0o1QFS"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_uojr7mf",
        "template_mjczb8x",
        this
    )
    .then(function(){

        alert("Message Sent Successfully!");
        form.reset();

    })
    .catch(function(error){

        console.log(error);

        alert(error.text || error.message);

    });

});