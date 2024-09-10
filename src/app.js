import { tns } from "tiny-slider/src/tiny-slider";

if (document.querySelector(".why-slider")) {
  var slider = tns({
    container: ".why-slider",
    items: 4 ,

    slideBy: 1,
    autoplay: true,   
    gutter: 20,
    nav: false,  
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
  });
}

let headerHeight = document.querySelector("header").offsetHeight;

document.documentElement.style.setProperty(
  "--header-height",
  headerHeight + "px"
);


document.addEventListener("mousemove", function (e) {
  var xPos = e.clientX - follower.offsetWidth / 2;
  var yPos = e.clientY - follower.offsetHeight / 2;
  follower.style.left = xPos + "px";
  follower.style.top = yPos + "px";
});

const btn = document.querySelectorAll(".btn-2");



if (document.querySelector(".service-slider")) {
  var slider = tns({
    container: ".service-slider ",
    items: 3.3,
    slideBy: 1,
    autoplay: true,    
    gutter: 0,
    controls: true,
    controlsContainer:".service-controls",
    autoplayButton: false,
    autoplayButtonOutput: false,

    nav: false,
  });
}

if (document.querySelector(".footer-slider")) {
  var slider = tns({
    container: ".footer-slider ",
    items: 1,
    axis: "vertical",
    slideBy: 1,
    autoplay: true,   
    gutter: 0,
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,

    nav: false,
  });
}

if (document.querySelector(".review-slider")) {
  var slider = tns({
    container: ".review-slider ",
    items: 1,

    slideBy: 1,
    autoplay: true,    
    gutter: 0,
    nav: true,
    navContainer: ".hero-navs",
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
  });
}