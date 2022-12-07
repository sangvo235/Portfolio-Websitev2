/* author: Sang Vo
created: 22/07/22
last modified: 6/12/22
description: JavaScript file for index.html */

// Project Array List
let projects = [ {
  name: "Interactive Quiz Platform",
  image: "images/interactive_quiz.png",
  description: "Co-created an Interactive Quiz Platform that demonstrates a full-stack application. \
  Achieved HD through collaboration and implementation of the agile process. \
  Integrated frameworks such as Bootstrap and Django.",
  link: "https://github.com/JATTYz/Quiz-Application-Django-Project",
  github: "https://github.com/JATTYz/Quiz-Application-Django-Project"
},
{
  name: "Portfolio Website",
  image: "images/portfolio_website.png",
  tech: "images/html_logo.svg", 
  tech1: "images/css_logo.svg",
  tech2: "images/js_logo.svg",
  description: "Portfolio website demonstrating comprehension on front-end web development. \
  Includes parallax scrolling, hamburger menu and dynamic cross device compatibility. \
  Built with pure HTML/CSS/JS.", 
  link: "https://sangvo235.github.io",
  github: "https://github.com/sangvo235/sangvo235.github.io"
},
{
  name: "Dynamic Website",
  image: "images/asp.net.png",
  description: "Dynamic website implementing server-side PHP scripts to process and store quiz-attempt data.\
  Additionally built in enhancements such as login for admin to sort, edit and delete quiz results illustrating MySQL knowledge.",
  link: "",
  github: "https://github.com/sangvo235/ASP.NET_Website_PHP"
}
]

// creating project div
var projectDiv = document.getElementById("projects");

for (const project of projects){

  // wrapper div - card
  var pcard = document.createElement("div");
  pcard.className = "pcard";

  // project titles
  var title = document.createElement("h2");
  title.textContent = project["name"];

  // project images
  var image = document.createElement("img");
  image.src = project["image"];

  // project tech wrapper
  var projectTech = document.createElement("div");
  projectTech.className = "cardProjectTech";

  // project tech
  var tech = document.createElement("img");
  tech.src = project["tech"];

  var tech1 = document.createElement("img");
  tech1.src = project["tech1"];

  var tech2 = document.createElement("img");
  tech2.src = project["tech2"];

  // project desciption wrapper
  var descriptionBox = document.createElement("div");
  descriptionBox.className = "cardDescriptionBox";

  // project description
  var description = document.createElement("p");
  description.textContent = project["description"];

  // project link wrapper
  var linkWrapper = document.createElement("div");
  linkWrapper.className = "cardLinkWrapper";

  // project link
  var link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.href = project["link"];
  link.className = "fas fa-link";
  
  var linkName = document.createElement("h3");
  linkName.textContent = "Demo";

  // project github
  var github = document.createElement("a");
  github.setAttribute("target", "_blank");
  github.href = project["github"];
  github.className = "fab fa-github";
  github.classList.add("cardLink");

  var githubName = document.createElement("h3");
  githubName.textContent = "Github";
  
  // Appending individual components  
  projectTech.appendChild(tech);
  projectTech.appendChild(tech1);
  projectTech.appendChild(tech2);
  descriptionBox.appendChild(description);
  link.appendChild(linkName);
  github.appendChild(githubName);
  linkWrapper.appendChild(link);
  linkWrapper.appendChild(github);

  // Appending card components 
  pcard.appendChild(title);
  pcard.appendChild(image);
  pcard.appendChild(projectTech);
  pcard.appendChild(descriptionBox);
  pcard.appendChild(linkWrapper);

  // Appending card to project div
  projectDiv.appendChild(pcard)

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

