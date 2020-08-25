import React from 'react';

import { SpinnerWrapper, SpinnerSvg, SpinnerPath } from './Spinner.styles';

const Spinner = ({ center, small }) => {
  return (
    <>
      <SpinnerWrapper center={center}>
        <SpinnerSvg
          width={small ? '20px' : '40px'}
          height={small ? '20px' : '40px'}
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <SpinnerPath
            fill="none"
            stroke-width="6"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"
          ></SpinnerPath>
        </SpinnerSvg>
      </SpinnerWrapper>
    </>
  );
};

export default Spinner;
