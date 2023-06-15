import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import Script from 'next/script'

import Rotates from './rotates';
import Earth from './earth';

export default function Home() {
  return (
    <>
      <Earth />
      <main id='main-scroll' className={`${styles.main} h-screen overflow-y-auto snap-y snap-mandatory`}>
        <section className='container h-screen snap-start grid place-content-center'>
          <h1><ruby>何時<rp>(</rp><rt>なんじ</rt><rp>)</rp></ruby>？<ruby>何分<rp>(</rp><rt>なんふん</rt><rp>)</rp></ruby>？<ruby>何秒<rp>(</rp><rt>なんびょう</rt><rp>)</rp></ruby>？<br /><ruby>地球<rp>(</rp><rt>ちきゅう</rt><rp>)</rp></ruby>が<ruby>何回<rp>(</rp><rt>なんかい</rt><rp>)</rp></ruby><ruby>回<rp>(</rp><rt>まわ</rt><rp>)</rp></ruby>ったとき？</h1>
          <p className='mt-10 text-center'><ruby>地球<rp>(</rp><rt>ちきゅう</rt><rp>)</rp></ruby>が<ruby>何回<rp>(</rp><rt>なんかい</rt><rp>)</rp></ruby><ruby>回<rp>(</rp><rt>まわ</rt><rp>)</rp></ruby>ったかがわかるサイト</p>
          {/* <Link href='#'>見る</Link> */}
        </section>
        <section className='container h-screen snap-start grid place-content-center sm:w-1/2 sm:mr-0'>
          <Rotates />
        </section>
        <section className='container h-screen snap-start grid place-content-center'>
          <div className='container p-10 backdrop-blur bg-[#FFFFFF40] rounded-3xl'>
            <h2>解説</h2>
            <div className='overflow-y-scroll mt-10'>
              <p>そもそも、地球の回転には自転と公転があります。今回は自転の回数を計算しています。</p>
              <p className='mt-2.5'>ここでは2022年1月1日に、地球が誕生してから45.43億年経過したと仮定しています。</p>
              <p className='mt-2.5'>地球の回転は少しずつ遅くなり続けています。地球誕生当時1日の長さは5時間だったとされています。<br />ここでは2022年1月1日に1日の長さが24時間に達したと仮定しています。</p>
              <p className='mt-2.5'>800.2055*4,543,080,000=3,635,397,602,940<br />ここから現在までの日数を足したものが、地球が回った回数です。</p>
              <h6 className='mt-10 text-start'>出典</h6>
              <ol>
                <li><Link href='https://ordix.hatenablog.jp/entry/2016/06/09/201057' target='_blank'>「何時何分何秒地球が何回回ったとき」　問題を真剣に考えてみた - 天気晴朗なれども奈美高志くん</Link></li>
                <li><Link href='https://english-otter.com/2018/01/12/the-earth/' target='_blank'>【論破用】「何時何分何秒地球が何回回ったとき」を計算してみた 【積分】 | カワウソは考える。</Link></li>
              </ol>
            </div>
          </div>
          <aside className='mt-10 text-center'><Link href='https://shugomatsuzawa.com' target='_blank'>このサイトを作った人</Link> <small>©︎ Shugo Matsuzawa 2023</small></aside>
        </section>
      </main>
    </>
  )
}
