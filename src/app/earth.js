'use client';

import Script from 'next/script'

const Earth = () => {

  return (
    <>
      <Script src="/webglearth2-offline/v2/api.js" strategy='beforeInteractive' />
      {/* <Script src="http://www.webglearth.com/v2/api.js" strategy='beforeInteractive' /> */}
      <Script src="/webglearth.js" onLoad={() => { initialize() }} />
      <div id="earth_div" inert className='!fixed inset-0 -z-10 mix-blend-lighten opacity-60 contrast-more:opacity-20'></div>
    </>
  );
};

export default Earth;