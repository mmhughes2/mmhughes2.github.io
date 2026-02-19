
const tank = document.getElementById("tank");

for (let i = 0; i < 30; i++) {

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  
  bubble.style.left = Math.random() * 100 + "%";

  
  const size = Math.random() * 12 + 6;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  
  const duration = Math.random() * 5 + 4;
  bubble.style.animationDuration = duration + "s";

  
  bubble.style.animationDelay = Math.random() * 5 + "s";

  tank.appendChild(bubble);
}
