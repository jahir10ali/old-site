document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".edu-header");
    toggles.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.toggle);
        if (!target) return;
        target.classList.toggle("active");
        btn.querySelector(".arrow").classList.toggle("open");
      });
    });
  });
  