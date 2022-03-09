import '../styles/globals.css'
import '../styles/App.css';
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <meta id="description" name="description" content="Veritoolz is a free online tools website where you can find all new and useful tools. text tools, social media tools, seo tools, convert tools." />
        <meta id="og-title" property="og:title" content="All online tools in one place | veritoolz" />
        <meta property="og:description" content="Veritoolz is a free online tools website where you can find all new and useful tools. text tools, social media tools, seo tools, convert tools."/>
        <meta name="twitter:title" content="All online tools in one place | veritoolz"/>
        <meta name="twitter:description" content="Veritoolz is a free online tools website where you can find all new and useful tools. text tools, social media tools, seo tools, convert tools."/>
        <link rel="canonical" href="https://veritoolz.com" />
        <meta name="robots" content="all"/>
        <meta name="keywords" content="online tools 2022, free online tools, online tools, veritoolz, veritoolz website"/>
        <title>All online tools in one place | veritoolz</title>
      </Head>
      {/*<!-- Google Adsense -->*/}
      <Script data-ad-client="ca-pub-2151999556911355" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script>
      {/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W6SYEEJCHF" strategy="afterInteractive"></Script>
      <Script
      id="Google-Analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W6SYEEJCHF');
        `
      }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
