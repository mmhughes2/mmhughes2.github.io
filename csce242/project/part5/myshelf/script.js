// Simple interactivity placeholder

// Example: dynamic progress animation
document.querySelectorAll(".fill").forEach(bar => {
  const width = bar.style.width;
  bar.style.width = "0%";

  setTimeout(() => {
    bar.style.transition = "1s ease";
    bar.style.width = width;
  }, 200);
});

// Notes save simulation
document.querySelector("button:last-of-type")?.addEventListener("click", () => {
  alert("Notes saved!");
});