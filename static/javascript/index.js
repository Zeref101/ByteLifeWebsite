const logo = document.querySelector(".loading-logo");
const logoPage = document.querySelector(".show-logo");
const navbar = document.querySelector(".navbar");
const logo2 = document.querySelector(".logo");
const container2 = document.querySelector(".dummy")
const countdown = document.querySelector("#countdown")
const h1 = document.querySelector("#h1")
const h2 = document.querySelector("#h2")
const social1 = document.querySelector("#social1")
const social2 = document.querySelector("#social2")
const social3 = document.querySelector("#social3")
const social4 = document.querySelector("#social4")


const tl = gsap.timeline();
tl.to(logo, { scale: 1.5, duration: 1 });
tl.to(logo, { z: 200, duration: 1 });
tl.to(logo, { y: -100, duration: 0.5 });
tl.play();

window.addEventListener("scroll", () => {
  logoPage.style.transform = `translateY(-1000px)`;
  navbar.classList.remove("hide");
  setTimeout(()=>{
    countdown.classList.remove("hide");

    countdown.classList.add("fade-in");

  },500)
  const nl = gsap.timeline();
  nl.to(logo2, { x: 250, duration: 0.6, delay:0.9 });
});

function twoDigits(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num.toString();
  }
}

// Set the date we're counting down to
const countDownDate = new Date("July 26, 2023 00:00:00").getTime();

// Update the countdown every second
const x = setInterval(function() {

// Get today's date and time
const now = new Date().getTime();

// Find the distance between now and the countdown date
const distance = countDownDate - now;

// Calculate the days, hours, minutes and seconds remaining
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="countdown"
document.getElementById("days").innerText = twoDigits(days);
document.getElementById("hours").innerText = twoDigits(hours);
document.getElementById("minutes").innerText = twoDigits(minutes);
document.getElementById("seconds").innerText = twoDigits(seconds);

// If the countdown is finished, display a message
if (distance < 0) {
  clearInterval(x);
  document.getElementById("countdown").innerHTML = "EXPIRED";
}
}, 1000);