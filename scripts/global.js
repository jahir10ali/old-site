document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button[data-section]");
    const content = document.getElementById("content");
  
    // Function to load a section
    const loadSection = (section) => {
      const filePath = `sections/${section}.html`;
  
      fetch(filePath)
        .then(response => {
          if (!response.ok) throw new Error(`Could not load ${filePath}`);
          return response.text();
        })
        .then(html => {
          content.innerHTML = html;
          content.classList.add("active");
          window.scrollTo(0, 0);
        })
        .catch(error => {
          content.innerHTML = `<p>Error loading section: ${error.message}</p>`;
        });
    };
  
    // Load 'about' section by default
    loadSection("about");
  
    // Add click event listeners to buttons
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const section = button.getAttribute("data-section");
        loadSection(section);
      });
    });
  });
  