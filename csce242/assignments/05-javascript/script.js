const triangle = document.getElementById("triangle");
const geometryCard = document.getElementById("geometryCard");

const datePicker = document.getElementById("datePicker");
const dateMessage = document.getElementById("dateMessage");

const sunImage = document.getElementById("sunImage");
const frameBox = document.getElementById("frameBox");


const showTriangle = () => {
    triangle.style.display = "block";
};

geometryCard.addEventListener("click", showTriangle);


const displayDate = (event) => {
    const chosenDate = event.target.value;
    if (chosenDate) {
        const formatted = chosenDate.replace(/-/g, "/");
        dateMessage.textContent = `You picked the date: ${formatted}`;
    }
};

datePicker.addEventListener("change", displayDate);


const changeImage = () => {
    sunImage.src = "images/Sun.png";
    frameBox.classList.add("frame-active");
};

sunImage.addEventListener("click", changeImage);