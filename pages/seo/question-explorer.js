import Head from 'next/head'
import { useState, useEffect } from "react"
import axios from "axios";
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import RelatedTools from "../../components/RelatedTools"

export default function QuestionSearcher() {
	const BASE_URL = "https://veritoolz.herokuapp.com"

	const [data, setData] = useState("")
	const [result, setResult] = useState([])
	const [isDataRequested, setIsDataRequested] = useState(false)
	const [showLoading, setShowLoading] = useState(false)
	const [isUserBlocked, setIsUserBlocked] = useState(false)
	useEffect(() => {

		if(isDataRequested) {
			setIsDataRequested(false)

			function getWhatQuestions() {
			  return axios.get(`${BASE_URL}/thirdparty/question-explorer?q=${encodeURIComponent("what " + data)}`);
			}

			function getHowQuestions() {
			  return axios.get(`${BASE_URL}/thirdparty/question-explorer?q=${encodeURIComponent("how " + data)}`);
			}

			function getWhyQuestions() {
			  return axios.get(`${BASE_URL}/thirdparty/question-explorer?q=${encodeURIComponent("why " + data)}`);
			}

			Promise.all([getWhatQuestions(), getHowQuestions(), getWhyQuestions()])
			.then((results) => {
				setIsUserBlocked(false)

				const what = {
					questionType: "What",
					data: results[0]?.data
				};
				const how = {
					questionType: "How",
					data: results[1]?.data
				};
				const why = {
					questionType: "Why",
					data: results[2]?.data
				};
				setResult([what, how, why])
				setShowLoading(false)
			})
			.catch((err) => {
				setShowLoading(false)
				setIsUserBlocked(true)
			}) ;
		}
	}, [result, data, isDataRequested, BASE_URL])

	function handleData(e) {
		setData(e.target.value)
	}
	function submitResult() {
		setResult([])
		if (data.length > 0) {
			if(!isUserBlocked) {setShowLoading(true)}
			setIsDataRequested(true)
		}
	}

	const questionTemplate = result?.map((el, i) => {
		if(el.data.length > 0) {
			const questions = el?.data?.map((q, i) => <li key={`q-${i}`}>{q?.suggestion._attributes?.data}</li>)
			const template = <>
				<h3>{el?.questionType}</h3>
				<ul>
	    		{questions}
	    	</ul>
			</>
		}
    return (
	   	<div key={i}>{template}</div>
		);
	})

	const blockedNotification = <h4>You have exceeded your daily request limit. Comeback tommorow.</h4>

	return (
		<>
			<Head>
				<title>Question explorer | veritoolz</title>
				<meta id="description" name="description" content="Question explorer is a free seo tool to search and discover what people are asking on the internet on real time. See questions about hot topics, trends, new products & brands." />
				<meta id="og-title" property="og:title" content="Search and discover what people are asking on the internet" />
				<meta property="og:description" content="Question explorer is a free seo tool to search and discover what people are asking on the internet on real time. See questions about hot topics, trends, new products & brands."/>
				  <meta name="twitter:title" content="Search and discover what people are asking on the internet"/>
				  <meta name="twitter:description" content="Question explorer is a free seo tool to search and discover what people are asking on the internet on real time. See questions about hot topics, trends, new products & brands."/>
				  <meta name="robots" content="all"/>
				  <meta name="keywords" content="text spliter, text separator, split text online"/>
				  <link rel="canonical" href="https://veritoolz.com/seo/question-explorer" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Question explorer</h1>
				<p>
				 Question explorer is a free seo tool to search and discover what people are asking on the internet on real time. See questions about hot topics, trends, new products & brands.
				</p>
			</article>
			<div className="seo-parent">
				<div className="search-wrapper">
					<div className="search-wrapper-2">
						<input type="text" className="search-bar" placeholder="Type a topic, keyword, product, brand" onChange={handleData} defaultValue={data} spellCheck="false" />
						<button onClick={submitResult}>Search</button>
					</div>
				</div>
				<div className="seo-result">
					{showLoading ? <h4>Loading...</h4> : questionTemplate}
					{isUserBlocked ? blockedNotification : undefined}
				</div>
			</div>
			<article className="content">
				<h2>What is SEO</h2>
				<p>
				SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.
				</p>
			</article>
			<article className="content">
				<h2>How does SEO work</h2>
				<p>
				Search engines such as Google and Bing use bots to crawl pages on the web, going from site to site, collecting information about those pages and putting them in an index. Think of the index like a giant library where a librarian can pull up a book (or a web page) to help you find exactly what you’re looking for at the time.
				</p>
			</article>
			<article className="content">
				<h2>Boost SEO With Question Keywords Optimization</h2>
				<p>
				Question-related searches are a significant part of the overall searches Google receives each day. Internet Live Stats suggests that there are around 3.5 billion searches per day in 2018, and in 2017  Jumpshot study published on Moz has predicted that approximately 8% of search queries are phrased as questions.

				Based on the above stats, we can safely conclude that optimizing your website for question keywords can make a huge difference to your SEO strategy. You can generate a lot of organic traffic, earn links or convert traffic into sales simply by grabbing a share of the featured snippet.
				</p>
			</article>
			<RelatedTools />
			<Footer/>
		</>
   );
}
