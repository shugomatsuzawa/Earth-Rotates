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
      <main id='main-scroll' className={`${styles.main} h-[100dvh] overflow-y-auto snap-y snap-mandatory`}>
        <section className='container p-10 h-[100dvh] snap-start grid place-content-center'>
          <h1 className='leading-loose'><span className='inline-block'><ruby>何時<rp>(</rp><rt>なんじ</rt><rp>)</rp></ruby>？</span><span className='inline-block'><ruby>何分<rp>(</rp><rt>なんふん</rt><rp>)</rp></ruby>？</span><span className='inline-block'><ruby>何秒<rp>(</rp><rt>なんびょう</rt><rp>)</rp></ruby>？</span><br />
          <span className='inline-block'><ruby>地球<rp>(</rp><rt>ちきゅう</rt><rp>)</rp></ruby>が</span><span className='inline-block'><ruby>何回<rp>(</rp><rt>なんかい</rt><rp>)</rp></ruby></span><span className='inline-block'><ruby>回<rp>(</rp><rt>まわ</rt><rp>)</rp></ruby>った</span><span className='inline-block'>とき？</span></h1>
          <p className='mt-4 text-center'><ruby>地球<rp>(</rp><rt>ちきゅう</rt><rp>)</rp></ruby>が<ruby>何回<rp>(</rp><rt>なんかい</rt><rp>)</rp></ruby><ruby>回<rp>(</rp><rt>まわ</rt><rp>)</rp></ruby>ったのかがわかるサイト</p>
        </section>
        <section className='container p-10 h-[100dvh] snap-start grid place-content-center'>
          <Rotates />
        </section>
        <section className='container p-2 h-[100dvh] snap-start grid place-content-center'>
          <div className='container p-6 lg:p-10 backdrop-blur bg-[#00000033] rounded-3xl'>
            <h2>解説</h2>
            <div className='overflow-y-scroll max-h-[40dvh] mt-10'>
              <p>そもそも地球の回転には2種類あり、自転と公転があります。<br />今回は地球が誕生してから現在までの自転の回数を計算しています。</p>
              <p className='mt-2.5'>地球の年齢を知るには、ウランなどの放射性崩壊を測定する方法が用いられます。<br />ここでは2022年1月1日に、地球が誕生してから45.43億年経過したと仮定しています。</p>
              <p className='mt-2.5'>地球の回転はおよそ7万年に1秒ずつ遅くなり続けています。地球誕生当時1日の長さは5時間だったとされています。<br />ここでは同じく2022年1月1日に1日の長さが24時間に達したと仮定しています。</p>
              <p className='mt-2.5 text-xl font-bold'>365.2422 <small>(うるう年を含む1年の日数)</small> × 24 = 8,765.8128 <small>(1年の時間)</small><br />
                8,765.8128 ÷ 5 <small>(地球誕生時の1日の時間)</small> = 1,753.1625 <small>(地球誕生時1年間に回る回数)</small><br />
                8,765.8128 ÷ 24 <small>(現在の1日の時間)</small> = 365.2422 <small>(現在1年間に回る回数)</small><br />
                √(1,753.1625 × 365.2422) = 800.2055 <small>(地球誕生時と現在の1年間に回る回数からの幾何平均)</small><br />
                800.2055 × 4,543,000,000 <small>(地球の年齢)</small> = 3,635,333,586,500 <small>(地球誕生時から2022年1月1日までに回った回数)</small></p>
              <p className='mt-2.5'>ここから現在までの日数を足したものが、地球が回った回数です。</p>
              <h6 className='mt-10 text-start'>出典</h6>
              <ol>
                <li><Link href='https://ordix.hatenablog.jp/entry/2016/06/09/201057' target='_blank'>「何時何分何秒地球が何回回ったとき」　問題を真剣に考えてみた - 天気晴朗なれども奈美高志くん</Link></li>
                <li><Link href='https://english-otter.com/2018/01/12/the-earth/' target='_blank'>【論破用】「何時何分何秒地球が何回回ったとき」を計算してみた 【積分】 | カワウソは考える。</Link></li>
              </ol>
            </div>
          </div>
          <aside className='mt-5 text-center not-italic'><Link href='https://shugomatsuzawa.com' target='_blank' className='not-italic'>このサイトを作った人</Link> | <small>©︎ Shugo Matsuzawa 2023</small></aside>
        </section>
      </main>
    </>
  )
}
