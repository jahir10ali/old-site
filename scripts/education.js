(() => {
    // Toggle main section (e.g. university, a-levels, gcse)
    const toggles = document.querySelectorAll(".edu-header");
    toggles.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.toggle);
        if (!target) return;
        target.classList.toggle("active");
        btn.querySelector(".arrow").classList.toggle("open");
      });
    });
  
    // Toggle inner year sections
    const yearButtons = document.querySelectorAll(".year-btn");
    yearButtons.forEach(button => {
      button.addEventListener("click", () => {
        const yearId = button.dataset.year;
        const target = document.getElementById(yearId);
        if (!target) return;
  
        // Collapse other year details
        document.querySelectorAll(".year-detail").forEach(detail => {
          if (detail !== target) detail.classList.remove("active");
        });
  
        // Toggle selected
        target.classList.toggle("active");
      });
    });
  })();
  