document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thanks for reaching out! I’ll reply soon");
  this.reset();
});

