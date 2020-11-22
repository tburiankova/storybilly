// import { useEffect, useRef } from 'react';
// import { withRouter } from 'react-router-dom';

// const ScrollIntoView = ({ children, location }) => {
//   const prevLocation = useRef();

//   useEffect(() => {
//     if (prevLocation.current !== location.pathname) {
//       window.scrollTo(0, 0);
//       prevLocation.current = location.pathname;
//     }
//   }, [location]);

//   return children;
// };

// export default withRouter(ScrollIntoView);

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
