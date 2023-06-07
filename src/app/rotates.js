'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import { useState, useEffect, cache } from 'react';
import { parseISO, format } from 'date-fns';

const Rotates = () => {
  // https://ordix.hatenablog.jp/entry/2016/06/09/201057
  // 2022年1月で45.43億年と仮定 ("The age of the Earth" by J. A. Jacobsen et al., Nature, 593, 202 (2021). ?)
  // 800.2055*4,543,080,000=3,635,397,602,940
  const [dateDisplay, setDateDisplay] = useState('');
  const [timeDisplay, setTimeDisplay] = useState('');
  const [tzDisplay, setTzDisplay] = useState('');
  const [rotatesDisplay, setRotatesDisplay] = useState('');
  const [clockError, setClockError] = useState(null);
  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      const distDate = new Date(2022, 1, 1);

      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const day = [ <ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>, <ruby>月<rp>(</rp><rt>げつ</rt><rp>)</rp></ruby>, <ruby>火<rp>(</rp><rt>か</rt><rp>)</rp></ruby>, <ruby>水<rp>(</rp><rt>すい</rt><rp>)</rp></ruby>, <ruby>木<rp>(</rp><rt>もく</rt><rp>)</rp></ruby>, <ruby>金<rp>(</rp><rt>きん</rt><rp>)</rp></ruby>, <ruby>土<rp>(</rp><rt>ど</rt><rp>)</rp></ruby> ][now.getDay()];
      const ampm = now.getHours() >= 12 ? <ruby>午後<rp>(</rp><rt>ごご</rt><rp>)</rp></ruby> : <ruby>午前<rp>(</rp><rt>ごぜん</rt><rp>)</rp></ruby>;
      const hour = now.getHours() >= 12 ? now.getHours() - 12 : now.getHours();
      const min = now.getMinutes();
      const sec = now.getSeconds();
      const tz = now.getTimezoneOffset() / -60;
      setDateDisplay([year, <ruby>年<rp>(</rp><rt>ねん</rt><rp>)</rp></ruby>, month, <ruby>月<rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>, date, <ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>, ' ', day, <ruby>曜日<rp>(</rp><rt>ようび</rt><rp>)</rp></ruby>]);
      setTimeDisplay([ampm, hour, <ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>, min, <ruby>分<rp>(</rp><rt>ふん</rt><rp>)</rp></ruby>, sec, <ruby>秒<rp>(</rp><rt>びょう</rt><rp>)</rp></ruby>]);
      setTzDisplay(['(UTC+', tz, ')']);

      if (now >= distDate) {
        setClockError(false);
        const rotates = 3635397602940 + (now - distDate) / 86400000;
        console.debug(rotates);

        const integer = String(rotates).split(".")[0];
        const n = integer.slice( -4 );
        const k = integer.slice( -8, -4 ) ? [integer.slice( -8, -4 ), <><ruby>万<rp>(</rp><rt>まん</rt><rp>)</rp></ruby><br /></>] : null;
        const m = integer.slice( -12, -8 ) ? [integer.slice( -12, -8 ), <><ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby><br /></>] : null;
        const g = integer.slice( -16, -12 ) ? [integer.slice( -16, -12 ), <><ruby>兆<rp>(</rp><rt>ちょう</rt><rp>)</rp></ruby><br /></>] : null;
        const decimal = String(rotates).split(".")[1] ? [<><ruby>.<rp>(</rp><rt>(てん)</rt><rp>)</rp></ruby><br /></>, String(rotates).split(".")[1], <ruby>回<rp>(</rp><rt>かい</rt><rp>)</rp></ruby>] : <ruby>回<rp>(</rp><rt>かい</rt><rp>)</rp></ruby>;
        setRotatesDisplay([g, m, k, n, decimal]);
      } else {
        setClockError(true);
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      { clockError ? (
        <p>コンピューターの時計に問題があります。</p>
      ) : (
        <>
          <div><ruby>今日<rp>(</rp><rt>きょう</rt><rp>)</rp></ruby>は<br />{dateDisplay}<br />{timeDisplay} <small>{tzDisplay}</small></div>
          <div><ruby>地球<rp>(</rp><rt>ちきゅう</rt><rp>)</rp></ruby>は<br />{rotatesDisplay}<br /><ruby>回<rp>(</rp><rt>まわ</rt><rp>)</rp></ruby>りました</div>
        </>
      )}
      
    </>
  );
};

export default Rotates;