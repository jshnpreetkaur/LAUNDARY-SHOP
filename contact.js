document.getElementById("contactform").addEventListener("submit", function(event){
event.preventDefault();
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();
if(name==="" || email==="" || message===""){
    alert("Please make sure you enter all the fields before submitting");
    return;
}
if(!email.includes("@")|| !email.includes(".")){
    alert("Make sure that you are entering a valid email!");
    return;
}
alert("Thank you very much for contacting us. Our team will soon reach back to you!");

document.getElementById("contactform").reset();
});
