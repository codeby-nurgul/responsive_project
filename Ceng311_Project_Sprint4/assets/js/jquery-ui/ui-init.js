// jQuery UI Button Widget Initialization (for Save Changes button in Profile page settings part)
$(function () {
  $(".btn-settings-save").button();
});

// jQuery UI Datepicker Initialization & jQuery Validate Plugin Setup (for contact page)
$(function () {
  // Datepicker for contact date selection
  $("#contact-datepicker").datepicker({
    minDate: 0,
    dateFormat: "dd/mm/yy",
    showAnim: "fadeIn",
  });

  // jQuery Validate for contact form fields
  $("#contact-form").validate({
    rules: {
      contactFullname: "required",
      contactEmail: {
        required: true,
        email: true,
      },
      contactDate: "required",
      contactMessage: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      contactFullname: "Please enter your full name",
      contactEmail: {
        required: "Please enter your email",
        email: "Enter a valid email",
      },
      contactDate: "Please select a preferred date",
      contactMessage: {
        required: "Please enter a message",
        minlength: "Your message must be at least 10 characters",
      },
    },
    submitHandler: function (form) {
      alert("Message sent successfully!");
      form.reset();
    },
  });
});

// jQuery UI Autocomplete Widget Initialization (for name suggestions in the eventdetails page). 
$(function () {
  const nameSuggestions = [
    "Nurgül",
    "Ahmet",
    "Ayşe",
    "Zeynep",
    "Mehmet",
    "Elif",
    "Can",
    "Yusuf",
    "Fatma",
    "Ali",
  ];

  $("#name-input").autocomplete({
    source: nameSuggestions,
  });
});

// jQuery UI Tooltip Widget Initialization (for review input) in the Support page.
$(function () {
  $(".review-input").tooltip({
    position: {
      my: "center up",
      at: "center center-50",
      collision: "fit",
    },

    show: { effect: "fade", duration: 300 },
    hide: { effect: "fade", duration: 300 },
  });
});

// Tracks daily task completion using a jQuery UI progress bar and displays a success popup when at least 5 tasks are completed. (in profile page daily tasks part)
$(function () {
    $("#task-progress").progressbar({
      value: 0
    });
  
    $(".task-item").on("change", function () {
      const totalRequired = 5;
      const checkedCount = $(".task-item:checked").length;
      const percent = Math.min((checkedCount / totalRequired) * 100, 100);
  
      $("#task-progress").progressbar("value", percent);
  
      if (checkedCount >= totalRequired) {
        showDailyTaskPopup(); 
      }
    });
  
    function showDailyTaskPopup() {
      const popup = $(".popup-container-daily-task");
      popup.text(" Daily Tasks Completed!"); 
      popup.fadeIn(300); 
  
      setTimeout(function () {
        popup.fadeOut(500); 
      }, 3000);
    }
  });
  
  