//upcoming events loading for homepage.
const upcomingEvents = [
  {
    title: "Beach Cleanup Day",
    date: "2025-04-28",
    time: "10:00 - 13:00",
    location: "Büyükçekmece Beach, Istanbul",
    description:
      "Join Green Future Association in collecting plastic waste along the coastline. Free eco-bags for all participants!",
    src: "assets/images/event-images/beachday1.jpg",
  },
  {
    title: "Tree Planting Event – A Tree for Hope",
    date: "2025-05-04",
    time: "09:00 - 12:00",
    location: "Akyurt Forest Area, Ankara",
    description:
      "Plant 500 saplings with GreenHope Foundation. Earn extra points for every friend you bring!",
    src: "assets/images/event-images/treeday1.jpg",
  },
  {
    title: "Zero Waste Living Workshop",
    date: "2025-05-12",
    time: "15:00 - 17:00",
    location: "The Earth Café, Alsancak, Izmir",
    description:
      "Learn practical tips for a zero-waste lifestyle including natural product making and recycling methods.",
    src: "assets/images/event-images/wasteworkshop1.jpg",
  },
];
let htmlUpcomingEvent = "";
for (let i = 0; i < upcomingEvents.length; i++) {
  htmlUpcomingEvent += `
          <div class="event-card">
          <img class="upcoming-events-img" src="${upcomingEvents[i].src}" alt="event1-image" />
          <h3>${upcomingEvents[i].title}</h3>
          <p class="upcoming-events-desription">
            ${upcomingEvents[i].description}
          </p>
           <p class="upcoming-events-location">
            ${upcomingEvents[i].location}
          </p>
          <p class="upcoming-events-date">
            ${upcomingEvents[i].date}
          </p>
           <p class="upcoming-events-time">
            ${upcomingEvents[i].time}
          </p>
        </div>
      `;
  $(".event-container").append(htmlUpcomingEvent);
  htmlUpcomingEvent = "";
}
// events loading for events.html.
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
// tasks cards loading.
const tasks = [
  {
    title: "Shop Sustainably",
    description: "Take a photo of yourself shopping with a reusable bag.",
  },
  {
    title: "Attend an Event & Give Feedback",
    description:
      "Share your experience and thoughts about an event you've joined.",
  },
  {
    title: "Share a Zero-Waste Recipe",
    description:
      "Create and post a DIY zero-waste recipe such as homemade soap or natural cleaner.",
  },
  {
    title: "Plastic Detox Week",
    description:
      "Avoid single-use plastic for one week and write a brief report of your experience.",
  },
  {
    title: "Watch a Nature Documentary & Summarize",
    description:
      "Watch an environmental documentary and share a short summary of what you learned.",
  },
  {
    title: "Start a Compost Bin",
    description:
      "Set up a simple compost bin at home and document your first steps with photos.",
  },
  {
    title: "Keep a Water-Saving Log",
    description:
      "Track your daily water-saving habits for 3 days and share your results.",
  },
  {
    title: "Use Public Transport for a Week",
    description:
      "Help reduce emissions by choosing buses, metros, or trams instead of personal vehicles.",
  },
  {
    title: "Assemble a Zero-Waste Kit",
    description:
      "Build your own kit including reusable utensils, a thermos, and a tote bag, then share a photo.",
  },
];
htmlTasks = "";
for (let i = 0; i < tasks.length; i++) {
  htmlTasks += `
    <div class="taskcard">
          <h3 class="task-header">${tasks[i].title}</h3>
          <p class="task-description">
            ${tasks[i].description}
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
  htmlTasks = "";
}
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
const ranks = [
  "🟢 Eco Newbie",
  "🌿 Green Explorer",
  "🌱 Eco Warrior",
  "🌎 Sustainability Master",
  "🏆 Earth Hero",
];
function completeTask(taskTitle) {
  let completedTasks = parseInt(localStorage.getItem("completedTasks")) || 0;
  completedTasks += 1;
  localStorage.setItem("completedTasks", completedTasks);
  showTaskPopup(taskTitle);
  updateBadgeProgress(completedTasks);
}
function showTaskPopup(taskTitle) {
  $("#popup-message").text(`✔️ "${taskTitle}" task completed!`);
  $("#task-popup").fadeIn();
  setTimeout(() => {
    $("#task-popup").fadeOut();
  }, 3000);
}
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
$(document).ready(function () {
  const initialTasks = parseInt(localStorage.getItem("completedTasks")) || 0;
  updateBadgeProgress(initialTasks);
});
$(document).on("click", ".noselect", function () {
  const taskTitle = $(this).closest(".taskcard").find("h3").text();

  setTimeout(() => {
    completeTask(taskTitle);
  }, 2500);
});
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
        <div class="event-info">
          <h2>${selectedEvent.title}</h2>
          <p><strong>Date:</strong> ${selectedEvent.date}</p>
          <p><strong>Time:</strong> ${selectedEvent.time}</p>
          <p><strong>Location:</strong> ${selectedEvent.location}</p>
          <p><strong>Host:</strong> ${selectedEvent.host}</p>
          <p><strong>Description:</strong> ${selectedEvent.description}</p>
          <p><strong>Speakers:</strong> ${selectedEvent.speakers}</p>
          <p><strong>Agenda:</strong><br>${selectedEvent.agenda}</p>
          <button class="add-list-btn">Add Your Event List</button>
        </div>
      `;
    $(".event-detail-img-container").html(html);
  }
}
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
              <img class="favorite-event-image" src="assets/images/other-images/foto1.jpg" alt="" />
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
$(document).ready(function () {
  $(".profile-detail").hide();
  $('.profile-detail[data-id="0"]').show();
});
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
function plusSlides(n) {
  showSlides((slideIndex += n));
}
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