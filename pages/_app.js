import '../styles/globals.css'
import '../styles/App.css';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
