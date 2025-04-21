document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button[data-section]");
    const landing = document.getElementById("landing");
    const content = document.getElementById("content");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const section = button.getAttribute("data-section");
        const filePath = `sections/${section}.html`;
  
        fetch(filePath)
          .then(response => {
            if (!response.ok) throw new Error(`Could not load ${filePath}`);
            return response.text();
          })
          .then(html => {
            content.innerHTML = html;
            landing.style.display = "none"; // Hide landing
            content.style.display = "block"; // Show content
            window.scrollTo(0, 0); // Optional: scroll to top
          })
          .catch(error => {
            content.innerHTML = `<p>Error loading section: ${error.message}</p>`;
            landing.style.display = "none";
          });
      });
    });
  });
  