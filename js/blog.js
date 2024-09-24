  
  document.getElementById("home-btn").addEventListener("click", function () {
    window.location.href = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/index.html');

  });