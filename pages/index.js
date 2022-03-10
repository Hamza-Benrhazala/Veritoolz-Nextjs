import Head from 'next/head'
import Main from '../components/Main';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { DATA } from "../utils/data"
export default function Home({ DATA }) {
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
      <Nav/>
      <Main DATA={DATA}/>
      <Footer/>
    </>
  )
}
export async function getStaticProps(context) {
  return {
    props: {DATA}, // will be passed to the page component as props
  }
}
