import Head from 'next/head'
import Main from '../components/Main';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { DATA } from "../utils/data"
export default function Home({ DATA }) {
  return (
    <>
      <Head>
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
