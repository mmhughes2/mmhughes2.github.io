
document.addEventListener("DOMContentLoaded", () => {



    const toggleBtn = document.getElementById("menuToggle");
    const menu = document.getElementById("menuItems");

    toggleBtn.addEventListener("click", () => {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            toggleBtn.textContent = "▼";
        } else {
            menu.style.display = "block";
            toggleBtn.textContent = "▲";
        }
    });



    window.showExercise = function(num) {

        document.getElementById("exercise1").style.display =
            num === 1 ? "block" : "none";

        document.getElementById("exercise2").style.display =
            num === 2 ? "block" : "none";

        if (num === 2) updateCountdown();
    };



    const slider = document.getElementById("slider");
    const sliderValue = document.getElementById("sliderValue");
    const sliderMessage = document.getElementById("sliderMessage");

    slider.addEventListener("input", () => {

        const minutes = slider.value;
        sliderValue.textContent = minutes + " minutes";

        if (minutes > 45)
            sliderMessage.textContent = "🍳 Plenty of time — let's have breakfast!";
        else if (minutes > 30)
            sliderMessage.textContent = "☕ Grab your coffee and relax.";
        else if (minutes > 15)
            sliderMessage.textContent = "📚 Maybe review your notes.";
        else
            sliderMessage.textContent = "🏃 Hurry! You're almost late!";
    });


    slider.dispatchEvent(new Event("input"));

});



function updateCountdown() {

    const now = new Date();

    const classTime = new Date();
    classTime.setHours(8, 30, 0, 0);

    const diffMinutes = Math.floor((classTime - now) / 60000);

    const msg = document.getElementById("countdownMessage");

    if (diffMinutes > 15)
        msg.textContent = `You have ${diffMinutes} minutes until class 😌`;

    else if (diffMinutes > 10)
        msg.textContent = `Almost time — ${diffMinutes} minutes 🎒`;

    else if (diffMinutes > 5)
        msg.textContent = `Finish up — ${diffMinutes} minutes 🚶`;

    else if (diffMinutes > 0)
        msg.textContent = `RUN! ${diffMinutes} minutes 🏃`;

    else if (diffMinutes >= -5)
        msg.textContent = "Class just started 😬";

    else if (diffMinutes >= -15)
        msg.textContent = "You're a little late 😕";

    else
        msg.textContent = "You missed class 😢";
}
