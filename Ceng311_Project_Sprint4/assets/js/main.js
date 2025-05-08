// Dynamically fetches and displays upcoming events from a local JSON file using jQuery.
$.getJSON("assets/data/upcoming-events.json", function (upcomingEvents) {
  upcomingEvents.forEach((event) => {
    const html = `
      <div class="event-card">
        <img class="upcoming-events-img" src="${event.src}" alt="event image" />
        <h3>${event.title}</h3>
        <p class="upcoming-events-description">${event.description}</p>
        <p class="upcoming-events-location">${event.location}</p>
        <p class="upcoming-events-date">${event.date}</p>
        <p class="upcoming-events-time">${event.time}</p>
      </div>
    `;
    $(".event-container").append(html);
  });
});


// This script dynamically generates and displays event cards using a predefined array of event data.
const events = [
  {
    title: "Bike City Tour – Reduce Your Carbon Footprint",
    date: "2025-05-18",
    time: "11:00 - 13:00",
    location: "GençPark Entrance, Adana",
    description:
      "Cycle through the city as an eco-friendly alternative to motor vehicles. Receive a GreenRide badge!",
    src: "assets/images/event-images/biketour1.jpg",
  },
  {
    title: "Recycled Design Contest",
    date: "2025-05-22",
    time: "13:00 - 16:00",
    location: "Kültürpark Fairground, Izmir",
    description:
      "Design creative products from waste materials and compete for exciting prizes!",
    src: "assets/images/event-images/recycledday1.jpg",
  },
  {
    title: "Sustainable Fashion Panel",
    date: "2025-05-30",
    time: "14:00 - 17:00",
    location: "Salt Galata, Istanbul",
    description:
      "Discover the environmental impact of the fashion industry and explore sustainable clothing solutions.",
    src: "assets/images/event-images/fashionpanel1.jpg",
  },
];
let htmlEvents = "";
for (let i = 0; i < events.length; i++) {
  htmlEvents += `
     <div class="card-event-detail">
      <div>
        <img class="event-image" src="${events[i].src}" alt="Event Image" />
      </div>
      <div class="event-description">
        <h3>${events[i].title}</h3>
        <p>
          ${events[i].description}
        </p>
        <button id="${
          "event-button" + i
        }" onclick="window.location.href='eventdetail.html'">See Details</button>
      </div>
    `;

  $(".card-event-container").append(htmlEvents);
  htmlEvents = "";
}


// This script fetches task data from a local JSON file and dynamically displays task cards with a complete button.
$.getJSON("assets/data/tasks.json", function (tasks) {
  tasks.forEach((task) => {
    const htmlTasks = `
    <div class="taskcard">
          <h3 class="task-header">${task.title}</h3>
          <p class="task-description">
            ${task.description}
          </p>
           <button class="noselect">
        <span>Complete</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 11c2.761.575 6.312 1.688 9 3.438 
                   3.157-4.23 8.828-8.187 15-11.438
                   -5.861 5.775-10.711 12.328-14 18.917
                   -2.651-3.766-5.547-7.271-10-10.917z"/>
        </svg>
      </button>
        </div>
    `;
    $(".my-tasks").append(htmlTasks);
  });
});



// This script handles task completion interaction, showing a confirmation popup with the task title after a short delay
$(document).on("click", ".noselect", function () {
  const taskTitle = $(this).closest(".taskcard").find("h3").text();
  setTimeout(() => {
    $("#popup-message").text(`✔️ "${taskTitle}" task completed!`);
    $("#task-popup").fadeIn();
    setTimeout(() => {
      $("#task-popup").fadeOut();
    }, 3000);
  }, 2500);
});

// Defines user achievement ranks based on the number of completed tasks
const ranks = [
  "🟢 Eco Newbie",
  "🌿 Green Explorer",
  "🌱 Eco Warrior",
  "🌎 Sustainability Master",
  "🏆 Earth Hero",
];


// Increments the completed task count, stores it in localStorage, and updates the UI with a popup and badge progress
function completeTask(taskTitle) {
  let completedTasks = parseInt(localStorage.getItem("completedTasks")) || 0;
  completedTasks += 1;
  localStorage.setItem("completedTasks", completedTasks);
  showTaskPopup(taskTitle);
  updateBadgeProgress(completedTasks);
}



// Displays a temporary popup message confirming the completion of a task
function showTaskPopup(taskTitle) {
  $("#popup-message").text(`✔️ "${taskTitle}" task completed!`);
  $("#task-popup").fadeIn();
  setTimeout(() => {
    $("#task-popup").fadeOut();
  }, 3000);
}



// Updates the user's rank and star progress display based on the number of completed tasks
function updateBadgeProgress(completedTasks) {
  const totalStars = completedTasks;
  const rankIndex = Math.min(Math.floor(totalStars / 5), ranks.length - 1);
  const currentRank = ranks[rankIndex];
  const starsInCurrentRank = totalStars % 5;
  let starsHTML = "";
  for (let i = 0; i < starsInCurrentRank; i++) {
    starsHTML += `<i class="fa-solid fa-star" style="color: gold; font-size: 30px;"></i> `;
  }
  const rankHTML = `
      <h3>Rank: ${currentRank}</h3>
      <p>You have completed ${completedTasks} tasks.</p>
      <p>Stars this rank: ${starsInCurrentRank}/5</p>
      <div>${starsHTML}</div>
    `;
  $("#badges-progress").html(rankHTML);
}

// On page load, initializes badge progress based on the number of previously completed tasks stored in localStorage
$(document).ready(function () {
  const initialTasks = parseInt(localStorage.getItem("completedTasks")) || 0;
  updateBadgeProgress(initialTasks);
});


// Handles task button clicks and triggers task completion logic with a delay
$(document).on("click", ".noselect", function () {
  const taskTitle = $(this).closest(".taskcard").find("h3").text();

  setTimeout(() => {
    completeTask(taskTitle);
  }, 2500);
});




// Manages event detail selection, storage in localStorage, and dynamic rendering on the event detail page
const eventDetails = [
  {
    title: "Bike City Tour – Reduce Your Carbon Footprint",
    date: "2025-05-18",
    time: "11:00 - 13:00",
    location: "GençPark Entrance, Adana",
    host: "EcoMove Network",
    speakers: ["Yusuf Arslan – Urban Mobility Specialist"],
    agenda: [
      "11:00 – Safety Briefing & Route Overview",
      "11:15 – Group Bike Ride",
      "12:30 – GreenRide Badge Ceremony",
      "13:00 – End of Tour",
    ],
    description:
      "Ride through the scenic city routes to promote clean transportation and raise awareness about carbon emissions. Bikes available for rent at site.",
    src: "assets/images/event-images/biketour1.jpg",
  },
  {
    title: "Recycled Design Contest",
    date: "2025-05-22",
    time: "13:00 - 16:00",
    location: "Kültürpark Fairground, Izmir",
    host: "RecycleArt Platform",
    speakers: ["Hande Er – Eco-Designer", "Kaan Vural – Upcycling Expert"],
    agenda: [
      "13:00 – Opening Ceremony & Jury Introduction",
      "13:30 – Live Design Showcase",
      "15:30 – Award Ceremony",
      "16:00 – Closing Remarks",
    ],
    description:
      "Use your creativity to transform waste into functional or artistic items. Winners receive eco-gift packs and featured exhibition space.",
    src: "assets/images/event-images/recycledday1.jpg",
  },
  {
    title: "Sustainable Fashion Panel",
    date: "2025-05-30",
    time: "14:00 - 17:00",
    location: "Salt Galata, Istanbul",
    host: "EcoFashion Circle",
    speakers: [
      "Melis Şahin – Sustainable Fashion Consultant",
      "Tuncay Deniz – Circular Economy Expert",
    ],
    agenda: [
      "14:00 – Keynote on Fashion’s Impact",
      "14:45 – Panel Discussion & Debate",
      "16:00 – Sustainable Brand Showcases",
      "17:00 – Networking Session",
    ],
    description:
      "Explore the intersection of fashion and sustainability. Learn how to make conscious clothing choices and discover brands leading the change.",
    src: "assets/images/event-images/fashionpanel1.jpg",
  },
];
$("#event-button0").click(() => {
  localStorage.setItem("selectedEvent", JSON.stringify(eventDetails[0]));
});
$("#event-button1").click(() => {
  localStorage.setItem("selectedEvent", JSON.stringify(eventDetails[1]));
});
$("#event-button2").click(() => {
  localStorage.setItem("selectedEvent", JSON.stringify(eventDetails[2]));
});
if (window.location.pathname.includes("eventdetail.html")) {
  const selectedEvent = JSON.parse(localStorage.getItem("selectedEvent"));
  if (selectedEvent) {
    const html = `
        <h1 class="events-header">${selectedEvent.title}'s Details</h1>
        <img class="event-detail-img" src="${selectedEvent.src}" alt="">
        <div class="event-details-info">
          <h2>${selectedEvent.title}</h2>
          <p><strong>Date:</strong> ${selectedEvent.date}</p>
          <p><strong>Time:</strong> ${selectedEvent.time}</p>
          <p><strong>Location:</strong> ${selectedEvent.location}</p>
          <p><strong>Host:</strong> ${selectedEvent.host}</p>
          <p><strong>Description:</strong> ${selectedEvent.description}</p>
          <p><strong>Speakers:</strong> ${selectedEvent.speakers}</p>
          <p><strong>Agenda:</strong>${selectedEvent.agenda}</p>
          <button class="add-list-btn">Add Your Event List</button>
        </div>
      `;
    $(".event-detail-img-container").html(html);
  }
}

// Adds the selected event to the user's favorites list in localStorage, preventing duplicates
$(document).on("click", ".add-list-btn", function () {
  const selectedEvent = JSON.parse(localStorage.getItem("selectedEvent"));
  if (!selectedEvent) return;
  let favorites = JSON.parse(localStorage.getItem("favoriteEvents")) || [];
  const alreadyExists = favorites.some(
    (event) => event.title === selectedEvent.title
  );
  if (!alreadyExists) {
    favorites.push(selectedEvent);
    localStorage.setItem("favoriteEvents", JSON.stringify(favorites));
    alert("Event added to your favorites!");
  } else {
    alert("This event is already in your favorites.");
  }
});


// Handles tab switching and dynamically loads favorite events from localStorage when the Favorites tab is selected
$(".tab-btn").click(function () {
  const index = $(this).data("target");
  $(".profile-detail").hide();
  $('.profile-detail[data-id="' + index + '"]').show();
  $(".tab-btn").removeClass("active");
  $(this).addClass("active");
  if (index === 3) {
    const $favoriteEvents = $("#favorite-events");
    if ($favoriteEvents.children(".fav-event-card").length === 0) {
      const favorites =
        JSON.parse(localStorage.getItem("favoriteEvents")) || [];
      for (let i = 0; i < favorites.length; i++) {
        const favEvent = favorites[i];
        const favHtml = `
            <div class="fav-event-card">
              <img class="favorite-event-image" src="${favEvent.src}" alt="" />
              <div class="event-description">
                <h3>${favEvent.title}</h3>
                <p>${favEvent.description}</p>
                <p><strong>Date:</strong> ${favEvent.date}</p>
                <p><strong>Location:</strong> ${favEvent.location}</p>
              </div>
            </div>
          `;
        $favoriteEvents.append(favHtml);
      }
    }
  }
});


// On page load, hides all profile sections and displays the default (first (profile)) section
$(document).ready(function () {
  $(".profile-detail").hide();
  $('.profile-detail[data-id="0"]').show();
});


// Initializes tab functionality by toggling 'active' classes for profile sections and corresponding tab buttons
$(function () {
  $(".profile-detail").removeClass("active");
  $('.profile-detail[data-id="0"]').addClass("active");
  $(".tab-btn").click(function () {
    const index = $(this).data("target");
    $(".profile-detail").removeClass("active");
    $('.profile-detail[data-id="' + index + '"]').addClass("active");
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");
  });
});
let slideIndex = 1;



// Sets up event listeners for review input, comment submission, and slideshow navigation on page load
$(document).ready(function () {
  $(".review-input").attr("id", "commentInput");

  $(".review-btn").on("click", function () {
    addComment();
  });

  $(".prev").on("click", function () {
    plusSlides(-1);
  });

  $(".next").on("click", function () {
    plusSlides(1);
  });

  showSlides(slideIndex);
});



// Adds a new user comment as a slide and resets the input field
function addComment() {
  const commentText = $("#commentInput").val().trim();
  if (commentText === "") {
    alert("Please enter a comment before submitting!");
    return;
  }
  const $newSlide = $("<div>").addClass("mySlides-support fade");
  const $comment = $("<p>").addClass("user-review").text(commentText);
  const $caption = $("<div>")
    .addClass("text-slide-support")
    .text("User Comment");
  $newSlide.append($comment, $caption);
  $(".slideshow-container-support .prev").before($newSlide);
  $("#commentInput").val("");
  showSlides(slideIndex);
}
// Changes the current slide index by a given increment
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Displays the slide corresponding to the current index and hides others
function showSlides(n) {
  const $slides = $(".mySlides-support");
  if (n > $slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = $slides.length;
  }
  $slides.hide();
  $slides.eq(slideIndex - 1).show();
}
