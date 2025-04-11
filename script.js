document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
  
    const fillProgressBars = () => {
      progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const skillLevel = bar.getAttribute("data-skill");
          bar.style.width = skillLevel;
          bar.style.opacity = 1;
        }
      });
    };
  
    window.addEventListener("scroll", fillProgressBars);
  });
  