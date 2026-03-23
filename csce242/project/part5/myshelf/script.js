document.querySelectorAll(".progress-track span").forEach((bar) => {
  const width = bar.style.width;
  bar.style.width = "0%";

  setTimeout(() => {
    bar.style.transition = "width 900ms ease";
    bar.style.width = width;
  }, 150);
});

document.querySelector(".save-button")?.addEventListener("click", () => {
  alert("Notes saved!");
});
