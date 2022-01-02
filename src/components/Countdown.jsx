import React from 'react';

const Countdown = () => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  // Set the date we're counting down to
  let countDownDate = new Date('Jul 1, 2047 00:00:00').getTime();

  function makeMeTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }

  // Update the count down every 1 second
  let x = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let demo = document.getElementById('demo');
    // Output the result in an element with id="demo"
    if (demo !== null) {
      demo.innerHTML =
        days +
        ' days ' +
        makeMeTwoDigits(hours) +
        ':' +
        makeMeTwoDigits(minutes) +
        ':' +
        makeMeTwoDigits(seconds);

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        demo.innerHTML = 'EXPIRED';
      }
    }
  }, 1000);

  return <span id="demo" />;
};

export default Countdown;
