document.getElementById("calculateBtn").addEventListener("click", function(){

    const selectedService= document.querySelector('input[name="service"]:checked');
    const selectedDuration= document.querySelector('input[name="duration"]:checked');
    const weight= Number(document.getElementById("weight").value);
    const result= document.getElementById("result");

    if(!selectedService || !selectedDuration || weight<=0){
        result.textContent= "Make sure that you have selected the service, duration and weight";
        result.style.color="red";
        return;
    }
    const service=selectedService.value;
    const duration=selectedDuration.value;
    let total=0;
    
    const prices={
        washing:{ oneTime:5, weekly:30, monthly:80, annual:900},
        ironing:{oneTime:5, weekly:20, monthly:60, annual:600},
        washandiron:{oneTime:10, weekly:95, monthly:250, annual:1000},
        drycleaning:{oneTime:15, weekly:90, monthly:450, annual:850},
        package:{oneTime:50, weekly:150, monthly:500, annual:1300}
    };
    if(duration==="oneTime"){
        total=prices[service].oneTime*weight;
    }
    else if(duration==="weekly"){
        total=prices[service].weekly*weight;
    }
    else if(duration==="monthly"){
        total=prices[service].monthly*weight;
    }
    else{
        total=prices[service].annual*weight;
    }

    result.textContent=`Total Price: $${total}`;

});