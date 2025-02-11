const addHello = () => {
    const helloText = document.getElementById('helloText');
    helloText.innerHTML += '<br>hello'; // Append 'hello' on a new line
};

const changeColor = () => {
    const colorInput = document.getElementById('colorInput');
    const star = document.getElementById('star');
    star.style.color = colorInput.value; // Change star color based on picker
};
