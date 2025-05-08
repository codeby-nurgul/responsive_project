// This script validates the sign-in and sign-up forms using jQuery Validation and provides error messages
$(document).ready(function () {
  // Initialize validation for the sign-in form
  $("#signin-form").validate({
    rules: {
      signinEmail: {
        required: true,
        email: true,
      },
      signinPassword: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      signinEmail: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
      signinPassword: {
        required: "Please enter your password",
        minlength: "Password must be at least 6 characters",
      },
    },
    submitHandler: function (form) {
      // Display success message and reset form
      alert("Sign in successful!");
      form.reset();
    },
  });

  // Initialize validation for the sign-up form
  $("#signup-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      surname: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Name must be at least 2 characters",
      },
      surname: {
        required: "Please enter your surname",
        minlength: "Surname must be at least 2 characters",
      },
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
      password: {
        required: "Please enter your password",
        minlength: "Password must be at least 6 characters",
      },
    },
    submitHandler: function (form) {
      // Display success message and reset form
      alert("Sign up successful!");
      form.reset();
    },
  });
});
