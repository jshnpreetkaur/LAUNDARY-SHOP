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
document.getElementById("confirmBtn").addEventListener("click", function(event){
    const selectedType= document.querySelector('input[name="type"]:checked');
    const scheduleInput= document.getElementById("scheduleTime").value;
    const result= document.getElementById("scheduleResult");

    if(!selectedType|| !scheduleInput){
        result.textContent="You need to select your choice and also need to select the time.";
        result.style.color="red";
        return;
    }

    const scheduleDate= new Date(scheduleInput);
    const now= new Date();

    if(scheduleDate<= now){
        result.textContent="Invalid Date. Choose future dates";
        result.style.color="red";
        return;
    }
    result.textContent=`Your ${selectedType.value} confirmed and scheduled on ${scheduleDate.toLocaleString()}.`;
})