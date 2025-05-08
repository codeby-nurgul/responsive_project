// This script retrieves user data from an external API and updates the profile section dynamically on page load
$(document).ready(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users/3",
    method: "GET",
    success: function (user) {
      $(".profile-detail h3").text(`Welcome, ${user.name}!`);
      $(".profile-detail")
        .find("p")
        .eq(0)
        .html(`<strong>Email:</strong> ${user.email}`);
      $(".profile-detail")
        .find("p")
        .eq(1)
        .html(
          `<strong>Location:</strong> ${user.address.city}, ${user.address.street}`
        );
    },
    error: function () {
      alert("User Informations are not loaded");
    },
  });
});