import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from "../components/Footer"
import Link from "next/link";

export default function NotFound() {
  const notFoundCss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "84vh"
  }
  return(
       <>
        <Head>
          <title>Page Not Found | Veritoolz</title>
        </Head>
        <Nav/>
        <div style={notFoundCss}>
          <h1 style={{marginBottom: "1rem"}}>404 Page Not Found.</h1>
          <p style={{textAlign: "center"}}>The link you followed may be broken, or the page may have been removed.
          <Link href='/'>
            <a style={{color: "#1b74ef"}}> Go back.</a>
          </Link>
          </p>
        </div>
        <Footer/>
       </>
   );
}
