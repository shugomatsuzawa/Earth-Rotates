'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import Script from 'next/script'
import { useState, useEffect, cache } from 'react';

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