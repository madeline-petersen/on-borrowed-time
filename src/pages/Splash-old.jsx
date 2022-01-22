import './Splash-old.scss';

import React from 'react';
import Countdown from '../components/Countdown';

const Splash = () => {
  return (
    <div className="screen-height bg-black w-full flex flex-col justify-between p-4 md:p-5">
      <div>
        <div className="flex md:hidden w-100 justify-center">
          <div className="mobile-container">
            <img
              src={'/images/onborrowedtime.jpg'}
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
          <img
            src={'/images/onborrowedtime.jpg'}
            alt="A group of strangers walking towards an unidentified building in Tiananmen Square in 1982."
            className="text-fade-in"
          />
        </div>
      </div>

      {/* bottom container */}
      <h3 className="small-body text-gray-60 text-fade-in">
        The Expiry — <Countdown />
      </h3>
    </div>
  );
};

export default Splash;
