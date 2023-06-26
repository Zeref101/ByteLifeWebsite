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