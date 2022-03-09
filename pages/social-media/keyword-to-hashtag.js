import Head from 'next/head'
import { saveAs } from 'file-saver'
import { useRef, useState } from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

export default function Hashtag() {
	const [data, setData] = useState("")
	const [separator, setSeparator] = useState("_")
	const [result, setResult] = useState("")

	const resultRef = useRef(null);
	const copyNoti = useRef(null);

	function copyToClipbloard() {
		resultRef.current.select();
		resultRef.current.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(resultRef.current.value);
		copyNoti.current.innerText = "copied!";
		setTimeout(() => {
		  copyNoti.current.innerText = "copy to clipboard";
		}, 1500)
	}
	function handleData(e) {
		setData(e.target.value)
	}
	function handleSeparator(e) {
		setSeparator(e.target.value)
	}
	function handleResult(e) {
		setResult(e.target.value)
	}
	function submitHashtags() {
		setResult("")
		if(data.length > 0) {
			let hashtagStr;
			const ResultArr = []
			data.split("\n").forEach(hashtag => {
				if(hashtag.length > 0) {
					if(hashtag.match(/#/g)) {
						hashtagStr = hashtag.replace(/\s+/g, separator) + "\n"
					}
					else {
						hashtagStr = "#" + hashtag.replace(/\s+/g, separator) + "\n"
					}
				}
				ResultArr.push(hashtagStr)
			})
			setResult(ResultArr.join(""))
		}
	}
	function Download() {
		if(result.length > 0) {
			var blob = new Blob(
	        	[result],
	        	{
	        		type: "text/plain;charset=utf-8"
	        	}
	        );
			saveAs(blob,`Hastags.txt`);
		}
	}
	function handleFaq(e) {
		const target = document.querySelector(`p#${e.target.id}`)
		const question = document.querySelector(`.question#${e.target.id}`)
		if(!target.className.includes("active")) {
			target.classList.add("active")
			question.classList.add("active")
		}
		else {
			target.classList.remove("active")
			question.classList.remove("active")
		}
	}

	return(
   <>
   		<Head>
				<title>Hashtags generator | veritoolz</title>
				<meta id="description" name="description" content="Best free online tool to create hashtags from keywords and download the result as text file, try our bulk hashtag generator. Creating hashtags never been that easy 100% for free." />
				<meta id="og-title" property="og:title" content="keywords to hashtags | veritoolz" />
				<meta property="og:description" content="Best free online tool to create hashtags from keywords and download the result as text file, try our bulk hashtag generator. Creating hashtags never been that easy 100% for free."/>
		    <meta name="twitter:title" content="Hashtags generator | veritoolz"/>
		    <meta name="twitter:description" content="Best free online tool to create hashtags from keywords and download the result as text file, try our bulk hashtag generator. Creating hashtags never been that easy 100% for free."/>
		    <meta name="robots" content="all"/>
		    <meta name="keywords" content="hashtag generator, create hashtags online,
		    text to hashtag, keywords to hashtags, bulk hashtag creator"/>
		    <link rel="canonical" href="https://veritoolz.com/social-media/create-hashtags-from-keywords" />
			</Head>
   		<Nav/>
   		<article className="content">
   			<h1>Keywords to hashtags</h1>
   			<p>
   				Best free online tool to create hashtags from keywords and download the result as text file, try our bulk hashtag generator. Creating hashtags never been that easy 100% for free.
   			</p>
   		</article>
   		<article className="content">
   			<h2>How to use</h2>
   			<ul className="how-to">
   				<li>Put your keywords in the text area.</li>
   				<li><span className="span-optional">optional:</span> put your prefered word on the "Replace space with" to replace space with your word.</li>
   				<li>Click on the submit button.</li>
   				<li><span className="span-optional">optional:</span> click on the download button to download your result as a text file.</li>
   			</ul>
   		</article>
			<div className="wrapper-parent">
					<div className="two-wrapper">
						<div className="input-container">
							<span className="input-name">text</span>
							<textarea onChange={handleData} defaultValue={data} spellCheck="false" placeholder="one keyword per line"></textarea>
						</div>
						<div className="input-container">
							<span className="input-name">result</span>
							<textarea ref={resultRef} onChange={handleResult} defaultValue={result} spellCheck="false"></textarea>
							<div className="clipboard-svg-box">
								<div className="clipboard-svg-bg">
									<svg onClick={copyToClipbloard} version="1.1" className="clipboard-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" xmlSpace="preserve" width="22px" height="22px">
					    	        <g>
					    	            <polygon points="295.343,31.863 262.549,31.863 262.549,0 192.451,0 192.451,31.863 159.657,31.863 159.657,86.961 295.343,86.961
					    					" />
					    	            <polygon points="325.343,31.863 325.343,116.961 129.657,116.961 129.657,31.863 74.559,31.863 74.559,455 380.441,455
					    				380.441,31.863"/>
					    	        </g>
					    	    </svg>
								</div>
			    	    <div ref={copyNoti} className="copy-notification">copy to clipbloard</div>
							</div>
						</div>
					</div>
					<div className="submit-set-box">
						<label>
			  				<span>Replace space with:</span>
			  				<input type="text" onChange ={handleSeparator} defaultValue={separator}/>
			  			</label>
						<button className="btn-submit" onClick={submitHashtags}>Submit</button>
						<button className="btn-submit" onClick={Download}>Download</button>
					</div>
			</div>
			<article className="content">
	 			<h2>Example</h2>
	 			<p>In this basic example we will create hastags from keywords.
	 			</p>
	 			<p>The demo text:</p>
	 			<div className="code-playground">
	 				instagram<br/>
	 				veritoolz<br/>
	 				hello word<br/>
	 				#online-tools<br/>
	 			</div>
	 			<p className="small-note">make sure one keyword per line.</p>
	 			<p>Replace space with:</p>
	 			<div className="code-playground">_</div>
	 			<p className="small-note">you can change it to any word you want.</p>
	 			<p>Result:</p>
	 			<div className="code-playground">
	 				#instagram<br/>
	 				#veritoolz<br/>
	 				#hello_word<br/>
	 				#online-tools<br/>
	 			</div>
	 			<p className="small-note">keywords that has "#" will be ignored.</p>
			</article>
			<article className="content">
   			<h2>Why Shoud You Use Hashtags</h2>
   			<p>
	   			There are two main reasons that you should use hashtags
	   			one of them your probably already know, the second one is not talked about enough.
	   			number 1 what you already know using hashtags can potentialy increase your reach; each hashtag is an avenue for people to find your content. they're a great way to be found by new people looking or using hashtag
	   			that you're using.
	   			number 2 the lesser known reason is hashtags actually categorize your content, using hashtags basically tells
	   			instagram more about your content and how they can categorize you to push your content to the right people.
   			</p>
   		</article>
   		<article className="content">
   			<h2>How To Find The Right Hashtags To Increase Your Reach</h2>
   			<p>
	   			If you're somebody who's done a lot of hashtag research
	   			you have probably come across this use all 30 hashtags strategy:</p>
	   			<ul>
	   				<li>10 should have less than 50k uses.</li>
	   				<li>10 should have between 50k-100k uses.</li>
	   				<li>10 should have less than 500k uses.</li>
	   			</ul>
	   			<p>There are a lot of strategies out there that tells you to use a varying amount of hashtags.
	   			while these strategies or those numbers that I said that kind of varies depending on where you're seeing this information from there is one factor that is not considered and that factor is how relevent the hashtag is right now?.
	   			because yeah it might have 500k uses but is it currently active? will you get the reach and activity that you want?.</p>
	   			<p>Your strategy should use two things active hashtags and niche hashtags.
	   			think of hashtags grouping as a river the hashtag uses tells you how many boats have gone through the river all time but they don't tell you how quickly the river is moving or how many boats are currently there, a quick way to check if the hashtag is a good fit for you is to look at the top 9 posts and pay attention to these 3 things:</p>
	   			<ul>
	   				<li>Make sure that your photo has the same feel and vibes.</li>
	   				<li>Average the engagement on those posts; take all their nine posts (total number of likes and comments)/9, if your engagement is equal to or higher than the result that mean that this hashtag is the right one for you.</li>
	   				<li>Make sure that those top 9 posts aren't outdated.</li>
	   			</ul>
	   			<p>
	   			The niche specific hashtags:<br/>
	   			this mean that the hashtags you're using should be very specific to your photo, caption, profile.
	   			niching down is a benefit to you, let's just do an example if you were to post a picture of yourself in hawaii and giving like 5 best tips for instagram hashtag strategy stay away from irrelevent hashtags like #mondaymotivation or #bossbabe or #travellust, one of those might be irrelevent but the other ones while they might be relevent to the post a little bit
	   			like #travellust or #bossbabe they're not niche specific there not niched down enough to truly help that photo. instead you could use #hashtagstrategy or #instagramtips or #hawaiitravel with these hashtags you're niching down, explaining the photo type and what the caption is about and your profile.
   			</p>
   		</article>
			<article className="content">
   			<h2>How To Find Niche Hashtags</h2>
   			<p>
	   			There are a few ways to find niche hashtags and instagram used to have a really great feature for this where you could see relevent hashtags but they don't have that feature anymore so you have to kind do little bit more digging when you go to the top 9 posts of a hashag that you're confident is niched down enough you can look at what other hashtags users are using within the top 9 posts. Another option is that you can go to a competitor's profile or profile within your niche and see what sort of hastags they're using and use those.</p>
	   			<p>Warning: make sure you stay away from banned hashtags.</p>
   		</article>
			<article className="content">
	 			<h2>What Are Banned Hashtags</h2>
	 			<p>
	   			Instagram has been cleaning certain hashtag groupings because they either overpopulated or they've had content that has violated their community guidlines, to check to see if a hashtag is banned go the hashtag you want to use on instagram if you see this popup "recent posts for #your_hashtag are hidden because some posts may not follow instagram community guidlines." this means that this hashtag is temporarily or indefinitly banned. if you repeatedly use a banned hashtag it can decrease your reach on your posts.
	 			</p>
	 		</article>
	 		<article className="content">
	 			<h2 className="faq-h2">FAQ</h2>
	 			<div className="faq" >
			 		<div id="faq-1" className="question" >
			 			<p>How many hastags shoud I use?</p>
			 			<button id="faq-1" onClick={handleFaq} >+</button>
			 		</div>
			 		<p id="faq-1" className="faq-answer">
			 			There is a rumor going around that "you should use 13 hastags, 13 is the magical number!".
						that's not true you can use as many or as little as you'd like as long as they are specific and niched down.
					</p>
		 		</div>
	 			<div className="faq">
			 		<div id="faq-2" className="question" >
			 			<p>Where to place hashtags?</p>
			 			<button id="faq-2" onClick={handleFaq}>+</button>
			 		</div>
			 		<p id="faq-2" className="faq-answer">
			 			If your goal is to maximize reach then put them in the caption.
					</p>
		 		</div>
	 			<div className="faq">
			 		<div id="faq-3" className="question" >
			 			<p>what if hastags don't work?</p>
			 			<button id="faq-3" onClick={handleFaq}>+</button>
			 		</div>
			 		<p id="faq-3" className="faq-answer">
			 			If hastags don't work with your niche focus on SEO and keywords.
					</p>
		 		</div>
	 		</article>
			<Footer/>
   </>
 	);
}
