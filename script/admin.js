function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}

function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');

  document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.classList.remove('active');
  });

  event.target.classList.add('active');
}

function logout() {
  alert("Logging out...");
  window.location.href = "/frontend/login.html"; // Redirect to login page
}
