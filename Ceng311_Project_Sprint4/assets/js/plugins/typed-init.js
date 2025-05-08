// This script initializes the Typed.js animation to display looping typing effects on the homepage slider
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed", {
    strings: ["Join.", "Act.", "Save the Planet."],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
    cursorChar: "",
  });
});
