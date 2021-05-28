import './Splash.scss';

import React from 'react';
import onborrowedtime from '../images/onborrowedtime.jpg';
import { useScreenClass } from 'react-grid-system';

const Splash = () => {
  const screenClass = useScreenClass();

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

  return (
    <div className="screen-height bg-black w-full flex flex-col justify-between p-4 md:p-5">
      <div>
        <div className="flex md:hidden w-100 justify-center">
          <div className="mobile-container">
            <img
              src={onborrowedtime}
              alt="A group of strangers walking towards an unidentified building in Tiananmen Square in 1982."
              className="text-fade-in"
            />
          </div>
        </div>

        {/* top container */}
        <div>
          <div className="flex justify-between items-center lg:mb-2 md:mb-1">
            <h3
              className={`hidden md:block small-headline text-white text-fade-in`}
            >
              A Borrowed Place, On Borrowed Time
            </h3>
            <h3
              className={`block md:hidden mobile-headline text-white text-fade-in mt-3.5 pt-px mb-1`}
            >
              A Borrowed Place, On Borrowed Time
            </h3>

            {/* hide below md breakpoint */}
            <h3 className="headline-characters text-white md:block hidden text-fade-in">
              暫借的地方, 暫借的時間
            </h3>
          </div>

          {/* show below md breakpoint */}
          <h3 className="mobile-characters text-white md:hidden mb-3.5 pb-px block text-fade-in">
            暫借的地方, 暫借的時間
          </h3>

          <h3 className="small-body text-gray-60 text-fade-in">
            Anthology coming soon
          </h3>
        </div>
      </div>

      <div className="md:flex hidden w-100 justify-center">
        <div className="desktop-container">
          <img src={onborrowedtime} alt="" className="text-fade-in" />
        </div>
      </div>

      {/* bottom container */}
      <h3 className="small-body text-gray-60 text-fade-in">
        The Expiry — <span id="demo" />
      </h3>
    </div>
  );
};

export default Splash;
