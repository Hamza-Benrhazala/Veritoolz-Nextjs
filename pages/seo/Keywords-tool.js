import Head from 'next/head'
import { useState, useEffect } from "react"
import axios from "axios";
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import { saveAs } from 'file-saver';

export default function KeywordTool() {

	const BASE_URL = "https://veritoolz.herokuapp.com"

	let keywordArr = [];

	const [data, setData] = useState("")
	const [result, setResult] = useState([])
	const [keywords, setKeywords] = useState([])
	const [isDataRequested, setIsDataRequested] = useState(false)
	const [showLoading, setShowLoading] = useState(false)
	const [isUserBlocked, setIsUserBlocked] = useState(false)
	function NumDynamicSort(property) {
	  var sortOrder = 1;

	  if(property[0] === "-") {
	      sortOrder = -1;
	      property = property.substr(1);
	  }

	  return function (a,b) {
	      if(sortOrder === -1) {
	          return (a[property]) - (b[property]);
	      } else {
	          return (b[property])- (a[property]);
	      }
	  }
	}
	useEffect(() => {
		if(isDataRequested) {
			setIsDataRequested(false)

			axios.get(`${BASE_URL}/thirdparty/keyword-tool?q=${encodeURIComponent(data)}`)
			.then((results) => {
				setIsUserBlocked(false)
				results?.data?.sort(NumDynamicSort("frequency"))
				setResult(results?.data)
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
	function Download() {
		setKeywords(keywordArr);
		if (keywords.length > 0) {
			var blob = new Blob(
	        	[keywords.join("\n")],
	        	{
	        		type: "text/plain;charset=utf-8"
	        	}
	        );
			saveAs(blob,`Free Keywords By Veritoolz.txt`);
		}
	}

	const keywordTemplate = result?.map((el, i) => {

		keywordArr.push(el.name.replace(/(?:<[^>]+>)/gi, ""))

		return <tr key={`keyword-${i}`}>
			<th style={{textAlign: "left"}}>
				<p style={{margin: "10px 0", "fontWeight": "400", "padding":" 0 10px"}}>{el.name.replace(/(?:<[^>]+>)/gi, "")}</p>
			</th>
			<th style={{width: "0px"}}>
			<span style={{marginRight: "10px"}}>{el.frequencyDisplay}</span>
			</th>
			<th style={{width: "0px"}}>
				<progress value={el.frequencyDisplay.replace("%", "")} max="100"></progress>
			</th>
		</tr>
		}
	);

	const keywordContainer = (keywordTemplate?.length > 0) ?
	<table style={{width: "100%", "border": "1px solid #e7dede", "borderRadius": "10px"}}>
		<tbody>
			<tr>
				<th style={{fontSize: "1.1rem","padding": "10px 0"}}>Keyword</th>
				<th></th>
				<th style={{textAlign: "center", fontSize: "1.1rem", "padding": "10px 25px 10px 0"}}>
					Popularity
				</th>
			</tr>
			{keywordTemplate}
		</tbody>
	</table> : undefined

	const blockedNotification = <h4>You have exceeded your daily request limit.</h4>

	return(
   <>
			<Head>
				<title>Keywords tool | veritoolz</title>
				<meta id="description" name="description" content="keywords tool is a free online keyword research tool to generate and download hundreds of long-tail keywords for any topic." />
				<meta id="og-title" property="og:title" content="Keywords tool | veritoolz" />
				<meta property="og:description" content="keywords tool is a free online keyword research tool to generate and download hundreds of long-tail keywords for any topic."/>
			    <meta name="twitter:title" content="Keywords tool | veritoolz"/>
			    <meta name="twitter:description" content="keywords tool is a free online keyword research tool to generate and download hundreds of long-tail keywords for any topic."/>
			    <meta name="robots" content="all"/>
			    <meta name="keywords" content="free keyword planner, free keyword tool, keyword tool download,
			    free keywords tool, keyword searcher"/>
			    <link rel="canonical" href="https://veritoolz.com/seo/Keywords-tool" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Keywords tool</h1>
				<p>
				keywords tool is a free online keyword research tool to generate and download hundreds of long-tail keywords for any topic.
				</p>
			</article>
			<div className="seo-parent">
				<div className="search-wrapper">
					<div className="search-wrapper-2">
						<input type="text" className="search-bar" placeholder="Type a topic, keyword, product, brand" onChange={handleData} defaultValue={data} spellCheck="false" />
						<button onClick={submitResult}>Search</button>
					</div>
				</div>
				<div className="seo-result" style={{width: "95%", flexDirection: "column"}} >
					<div className="submit-set-box" style={{marginBottom: "15px" ,alignSelf: "start"}}>

					{result.length > 0 ? <button className="btn-submit" onClick={Download}>Exoprt Data</button> : undefined}
					</div>
					{showLoading ? <h4>Please wait...</h4> : keywordContainer}
					{isUserBlocked ? blockedNotification : undefined }
				</div>
			</div>
			<article className="content">
				<h2>What is SEO</h2>
				<p>
					SEO is the process of improving your website’s rankings by making your website visible in search results. This process focuses on generating links and page rank from other popular sites. In short, SEO is all about getting your website listed in popular directories. It helps improve your visibility and traffic, and it requires a well-planned strategy. A good SEO company can guide you through the process. In addition to using effective techniques, they can also help you implement a social media strategy.
				</p>
				<p>
					SEO is important for any website, and can bring you more customers and profits. It focuses on improving a website’s visibility by attracting relevant traffic. This process enables it to stand out among millions of other websites. It works by leveraging keywords and optimizing the site’s pages and overall structure for the best search engine rankings. You can also improve your website’s visibility by improving your content. There are many factors to consider when implementing SEO strategies.
				</p>
				<h4>SEO Trends</h4>
				<p>
					The best SEO experts always keep up with trends and the fastest growing search engines in the market. They constantly monitor results to make sure they are delivering the best service possible. A positive experience can lead to a conversion. This means that your customers will be happier with your products or services and that your business will be a success. The more positive the experience for a customer, the more likely they will become loyal. This is the essence of SEO.
				</p>
				<p>
					What is search engine optimization? When it comes to marketing, SEO is an essential tool for the success of a website. Its primary objective is to generate organic traffic. The goal is to boost the website’s visibility in organic search engines. The search engine will reward high-quality websites with organic traffic. If your website has a high ranking in the SERPs, SEO will get you more traffic. So what is the difference between SEO?
				</p>
				<h4>Keywords</h4>
				<p>
					The most important thing is that you must optimize your site for the right keywords. It is a process in which search engine results are determined by how relevant your website is to the users’ searches. For instance, if you want to get to the top of Google, you should use SEO. You should also consider social media marketing, which is an essential part of SEO. The latter is an essential part of online marketing. With proper SEO, your website will get more organic traffic and customers.
				</p>
			</article>
			<article className="content">
				<h2>How does SEO work?</h2>
				<p>
				Search engines such as Google and Bing use bots to crawl pages on the web, going from site to site, collecting information about those pages and putting them in an index. Think of the index like a giant library where a librarian can pull up a book (or a web page) to help you find exactly what you’re looking for at the time.
				</p>
			</article>
			<article className="content">
				<h2>What could be causing you not to see growth</h2>
				<p>
					The first thing that you should check is your website. Even if you were using the latest SEO tips and techniques, you’d still be missing out if you were using old or incorrect information.
					You might be relying on an old URL, or an outdated page title, for example.<br/>
					In addition to your website, you should be updating your Social media profiles. Every time a new person joins your Facebook page, for example, you could increase your rank.
				</p>
				<h4>Search Engine Rankings</h4>
				<p>
					Of course, the problem could be that you aren’t getting any search engine rankings at all. That is to say, the search engines are not recognizing your website. Or it could be that the search engines are giving your website a poor ranking.

					You might want to try using a different keyword, to see if your current strategy is still working. Maybe you are trying to rank for “accountants” instead of “accountant”, for example.

					There are many other reasons why you might not be getting any traffic, but if you find that you aren’t getting any, then it’s important that you take some time to find the issue and fix it.
				</p>
				<h4>Fixing It</h4>
				<p>
					In some cases, it’s a little easier than you might think. For example, if the problem is that you are using a URL that has been around for a long time, it could be that the search engine’s algorithm changed and your old URL is no longer indexed. In that case, simply updating the URL could help get your website back in the search engine results.

					If the problem is that your site isn’t showing up in the search results, then it might just be that you have a bad backlink. In that case, you would need to start following some quality backlinking strategies and ensure that you have high-quality backlinks pointing to your site.
				</p>
				<p>
					If you are not seeing any results, or you are getting some results but not enough, then it is time to make some changes to your website. Perhaps you need to change your keywords. Perhaps you are using a bad URL. Perhaps you need to have a higher ranking from the search engine.

					Either way, be sure to work with an SEO expert who can show you a proven method that will get your website more traffic.
				</p>
			</article>
			<article className="content">
				<h2>Boost SEO With Question Keywords Optimization</h2>
				<p>
				Question-related searches are a significant part of the overall searches Google receives each day. Internet Live Stats suggests that there are around 3.5 billion searches per day in 2018, and in 2017  Jumpshot study published on Moz has predicted that approximately 8% of search queries are phrased as questions.

				Based on the above stats, we can safely conclude that optimizing your website for question keywords can make a huge difference to your SEO strategy. You can generate a lot of organic traffic, earn links or convert traffic into sales simply by grabbing a share of the featured snippet.
				</p>
			</article>
			<Footer/>
   </>
   );
}
