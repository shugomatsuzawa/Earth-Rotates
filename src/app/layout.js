import './globals.css'

// import "@fontsource-variable/noto-sans-jp/wght.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/800.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
  metadataBase: new URL('https://earth-rotates.shugomatsuzawa.com'),
  title: '地球が何回回った時？',
  description: '地球が何回回ったのかがわかるサイト',
  colorScheme: 'dark',
  themeColor: '#0f172a',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  manifest: '/pwa.webmanifest',
  openGraph: {
      title: '地球が何回回った時？',
      description: '地球が何回回ったのかがわかるサイト',
      url: '/',
      siteName: '地球が何回回った時？',
      images: {
          url: '/screenshot.png',
          width: 2994,
          height:  1800,
          alt: '地球が何回回った時？',
      },
  },
  twitter: {
    card: "summary_large_image",
    images: ['/screenshot.png']
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="dark">
    <body>{children}</body>
    </html>
  )
}
