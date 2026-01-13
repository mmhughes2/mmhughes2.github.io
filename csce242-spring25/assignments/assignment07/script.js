document.getElementById('drawStairs').addEventListener('click', function() {
    const stairs = document.getElementById('stairs');
    stairs.innerHTML = ''; // Clear previous stairs

    // Draw 10 stairs using a loop
    for (let i = 0; i < 10; i++) {
        const stair = document.createElement('div');
        stair.className = 'stair';
        stairs.appendChild(stair);
    }

    // Create and add the stick figure
    const figure = document.createElement('div');
    figure.className = 'stick-figure';
    figure.style.backgroundImage = 'url("images/right.png")';
    stairs.appendChild(figure);

    // Add the climb button
    const climbBtn = document.createElement('button');
    climbBtn.innerText = 'Climb Stairs';
    document.body.appendChild(climbBtn);

    climbBtn.addEventListener('click', function() {
        let step = 0;
        const interval = setInterval(function() {
            if (step >= 10) {
                clearInterval(interval);
                figure.remove();
                climbBtn.remove();
            } else {
                figure.style.bottom = `${step * 10}%`;
                figure.style.backgroundImage = `url("${step % 2 === 0 ? 'right.png' : 'left.png'}")`;
                step++;
            }
        }, 500);
    });
});
