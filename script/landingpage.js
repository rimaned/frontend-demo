document.addEventListener("DOMContentLoaded", () => {
  const sections = ["home", "how-it-works", "about"]; // Section IDs in order
  let currentIndex = 0; // Track the current section

  document.getElementById("scrollDown").addEventListener("click", function () {
    if (currentIndex < sections.length - 1) { // Stop at the last section
      currentIndex++;
      const nextSection = document.getElementById(sections[currentIndex]);
      if (nextSection) {
        window.scrollTo({ top: nextSection.offsetTop, behavior: "smooth" });
      }
    }
  });

  document.getElementById("backToTop").addEventListener("click", function () {
    currentIndex = 0; // Reset index when scrolling back up
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
