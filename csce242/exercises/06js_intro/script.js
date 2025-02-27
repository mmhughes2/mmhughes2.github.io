//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("WOW!");
    document.getElementById("result").innerHTML="Hi Portia";
};

//change color
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Good bye";
    messageP.classList.toggle("sad");

}

//happy script
document.getElementById("btn-happy").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("happy");
    displayP.innerHTML = "Good Times";
};

//sad script
document.getElementById("btn-sad").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("sad");
    displayP.innerHTML = "Sad TImes";
};

document.getElementById("btn-clear").onclick = () => {
    document.getElementById("display").classList.add("hidden");
};

//key down
document.getElementById("txt-emotion").onkeyup = (event) => {
    //const emotion = document.getElementById("txt-emotion").value;
    document.getElementById("emotional-message").innerHTML = 
    "You are feeling " + event.currentTarget.value;
}

//toggling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

//show color message 
document.getElementById("btn-choose-color").onclick = () => {
    const color = document.getElementById("txt-color").value.toLowerCase().trim();
    let mood = "";

    if(color == "blue"){
        mood = "grumpy";
    } 
    else if(color == "yellow"){
        mood = "mellow";
    }
    else {
        mood = "undefined";
    }

    
    document.getElementById("color-message").innerHTML = 
    `You chose ${color}. You are feeling ${mood}.`
};

/* moving the circle */
let pos = 0;
const changeCirclePos = (increment) => {
    pos += increment;
    document.getElementById("circle").style.setProperty("top", pos + "px");
};

document.getElementById("btn-down").onclick = () => {
    changeCirclePos(10);
}

document.getElementById("btn-up").onclick = () => {
    changeCirclePos(-10);
}

document.getElementById("btn-pick-color").onchange = (event) => {
    const color = event.currentTarget.value;
    //document.getElementById("circle").style.setProperty("background", color);
    document.getElementById("circle").style.setProperty("--circle-color", color);
}

/* Donations thermometer */
const GOAL = 1000;
let donations = 0;

document.getElementById("goal-display").innerHTML = `Goal $${GOAL}`;

document.getElementById("btn-add-donation").onclick = () => {
    //validate donation amount
    const donation = document.getElementById("txt-donation").value;
    document.getElementById("donation-error").classList.add("hidden");

    if(isNaN(donation) ||donation <= 0){
        document.getElementById("donation-error").classList.remove("hidden");
        return;
    }

    //update donation
    donations += parseFloat(donation);
    donationPercent = donations / GOAL * 100;

    if(donations >= GOAL){
        document.getElementById("donation-message").innerHTML = `Goal Reached!`;
        donationPercent = 100;
    } else {
        //show donation message.
    document.getElementById("donation-message").innerHTML = `$${GOAL - donations} to go!`;
    }

    //update thermometer
    document.getElementById("thermometer").style.setProperty("--donation-percent", donationPercent + "%");
};

let count = 0;
let updateCount;

document.querySelector("#btn-count").onclick = (event) => {
    //start the counter
    if(event.currentTarget,innerHTML.toLowerCase() == "start") {
        event.currentTarget.innerHTML = "Stop";

        updateCount = setInterval(()=>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        }, 300);
    } else {
        event.currentTarget.innerHTML = "Start";
        clearInterval(updateCount);
    }
};

document.querySelector("#btn-reset").onclick = () => {
    count = 0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML = "Start";
    document.querySelector("#count-display").innerHTML = " ";

}

document.querySelector("#btn-show-toys").onclick = (event) => {
    const toys = ["ball", "skipping rope", "doll", "mini car", "elmo"];

    event.currentTarget.disabled = true; //can only click this button once

    //loop through toys
    /*
    for(let i=0; i<toys.length; i++){
        console.log(toys[i]);
    }
    */
    const ul = document.createElement("ul");
    document.getElementById("display-toys").append(ul);

    toys.forEach((toy, i)=>{
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = `${i+1}. ${toy}`;
        console.log(`${i+1}. ${toy}`);
    });
    
}

document.getElementById("btn-show-toy-desc").onclick = () => {
    const toys = [];
    toys["ball"] = "An item to throw";
    toys["doll"] = "An item to love";
    toys["rope"] = "An item to exercise with";
    toys["car"] = "An item to push around";
    toys["lego"] = "An item to build with";

    const section = document.getElementById("display-toy-descs");

    for(let toy in toys){
        const p = document.getElementById("p");
        section.append(p);
        p.innerHTML = `${toy}. ${toys[toy]}`;
        p.onclick = () => {
            document.getElementById("toy-message").innerHTML = 
            `Best ${toy} Ever. ${toys[toy]}`
        }
    }
};

setInterval (() => {
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    const nextSlide = currentSlide.nextElementSibling;
    console.log(nextSlide);

    if(nextSlide == null){
        nextSlide = document.querySelector("#slideshow :first-child");
    }

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}, 1000);