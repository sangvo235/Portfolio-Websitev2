/* author: Sang Vo
created: 22/07/22
last modified: 30/07/22
description: JavaScript file for index.html */


// Quiz Platform
let projects = [ {
  name: "Interactive Quiz Platform",
  image: "images/interactive_quiz.png",
  description: "Co-created an Interactive Quiz Platform that demonstrates a full-stack application. \
  Achieved HD through collaboration and implementation of the agile process. \
  Integrated frameworks such as Bootstrap and Django. \
  Built with React Native and hosted on Expo",
  link: "https://github.com/JATTYz/Quiz-Application-Django-Project",
  gitlink: "https://github.com/JATTYz/Quiz-Application-Django-Project"
},
{
  name: "Random",
  image: "images/interactive_quiz.png",
  description: "xx. \
  xx. \
  xx. \
  xx",
  link: "https://github.com/JATTYz/Quiz-Application-Django-Project",
  gitlink: "https://github.com/JATTYz/Quiz-Application-Django-Project"
}
]
var projectDiv = document.getElementById("projects");
// console.log(projects[0]);
// for(var i =0; i<projects.length; i++){
//   console.log(projects[i]);
// }
for (const project of projects){
  // wrapper div
  var card = document.createElement("div");
  card.className = "card";
  // card.setAttribute("data-aos", "fade-down-right");
  // card.setAttribute("data-aos-offset", "200");
  // card.setAttribute("data-aos-delay", "50");
  // card.setAttribute("data-aos-duration", "1000");
  // card.setAttribute("data-aos-easing", "ease-in-out-sine");

  // project titles
  var title = document.createElement("h2");
  title.textContent = project["name"];

  // project images
  var image = document.createElement("img");
  image.src = project["image"];

  // project info
  var descriptionBox = document.createElement("div");
  descriptionBox.className = "cardDescriptionBox";
  
  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(descriptionBox);
  projectDiv.appendChild(card)

  var description = document.createElement("p");
  description.textContent = project["description"];

  var link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.href = project["link"];
  link.className = "fas fa-link";
  link.classList.add("cardLink")

  var gitLink = document.createElement("a");
  gitLink.setAttribute("target", "_blank");
  gitLink.href = project["gitlink"];
  gitLink.className = "fab fa-github";
  gitLink.classList.add("cardLink");

  descriptionBox.appendChild(description);
  descriptionBox.appendChild(link);
  descriptionBox.appendChild(gitLink);

  projectDiv.appendChild(card);




} 


// Scrolling Logic for Nav Bar
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Responsive Hamburger Menu for Mobile Logic 
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

  // Logic: when clicking hamburger the transition to an X in addition to the navmenu opening up occurs
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
})

  // Logic: when clicking a nav-link the menu should close
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  }))

let controller = new ScrollMagic.Controller();
// Chain multiple animations together
let timeline = new TimelineMax();

timeline
  .to(".bg_top", 6, { y: -400 })
  .to(".bg_mid", 6, { y: -200 }, "-=6")
  .fromTo(".bg_base", { y: -25 }, { y: 0, duration: 6 }, "-=6")
  .to(".projects", 6, { top: "0%" }, "-=6");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "125%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

document.querySelector(".card-btn").addEventListener
  ("click", () => {
  document.querySelector(".about").classList.toggle("change");
});




// var projectDiv = document.getElementById("myProjects");

// for (var key of Object.keys(projects)) {
//     console.log("TEST");
//   var project = projects[key];

 