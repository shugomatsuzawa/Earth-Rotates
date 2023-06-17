'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import Script from 'next/script'
import { useState, useEffect, cache } from 'react';

const Earth = () => {

  return (
    <>
      <Script src="https://www.webglearth.com/v2/api.js" />
      <Script src="/webglearth.js" onLoad={() => { initialize() }} />
      <div id="earth_div" className='!fixed inset-0 -z-10 mix-blend-lighten opacity-70'></div>
    </>
  );
};

export default Earth;