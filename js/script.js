// Output the results in those elements
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

// to add zero on the left for the single number
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


// Declar the variables
let counterDay, counterHours, counterMinutes, counterSeconds;

// Set the date we're counting down to
const countDownDate = new Date("June 18, 2021 15:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  counterDay = Math.floor(distance / (1000 * 60 * 60 * 24));
  counterHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  counterMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  counterSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  setCounter();
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    counterDay, counterHours, counterMinutes, counterSeconds = 00;
  }
}, 1000);


// set the counter on the screen
function setCounter() {
  days.textContent = addZero(counterDay);
  hours.textContent = addZero(counterHours);
  minutes.textContent = addZero(counterMinutes);
  seconds.textContent = addZero(counterSeconds);
}
setCounter();
