// scripts/education.js
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".edu-header").length === 0) return;
  
    document.querySelectorAll('.edu-header').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.toggle);
        target.classList.toggle('active');
        btn.querySelector('.arrow').classList.toggle('open');
      });
    });
  });
  