import Head from 'next/head'
import { saveAs } from 'file-saver'
import { useRef, useState } from "react"
import Nav from '../../components/Nav'
import Footer from "../../components/Footer"
export default function Text2Binary() {
	const [data, setData] = useState("")
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
		setData(e.target.value);
	}
	function handleResult(e) {
		setResult(e.target.value);
	}
	function submitResult() {
		let ResultArr = [];
		setResult("");
		if(data.length > 0) {
			data.split('').forEach((char) => {
		        ResultArr.push(char.charCodeAt(0).toString(2));
		    })
		    setResult(ResultArr.join(""));
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
			saveAs(blob,`Text to binary by veritoolz.txt`);
		}
	}

	return(
       <>
			<Head>
				<title>Text to binary | veritoolz</title>
				<meta id="description" name="description" content="Best free online tool convert text or string to binary and download the result as a text file, the quick and easy way to convert to binary. It's never been that easy 100% for free." />
				<meta id="og-title" property="og:title" content="Text to binary | veritoolz" />
				<meta property="og:description" content="Best free online tool convert text or string to binary and download the result as a text file, the quick and easy way to convert to binary. It's never been that easy 100% for free."/>
			    <meta name="twitter:title" content="Text to binary | veritoolz"/>
			    <meta name="twitter:description" content="Best free online tool convert text or string to binary and download the result as a text file, the quick and easy way to convert to binary. It's never been that easy 100% for free."/>
			    <meta name="robots" content="all"/>
			    <meta name="keywords" content="text to binary, convert text to binary,
			    string to binary, convert string to binary"/>
			    <link rel="canonical" href="https://veritoolz.com/converters/text-to-binary" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Convert text to binary</h1>
				<p>
					Best free online tool convert text or string to binary and download the result as a text file, the quick and easy way to convert to binary. It&apos;s never been that easy 100% for free.
				</p>
			</article>
			<article className="content">
   			<h2>How to use</h2>
   			<ul className="how-to">
					<li>Put your text in the text area.</li>
					<li>Click on the submit button.</li>
					<li><span className="span-optional">optional:</span> click on the download button to download your result as a text file.</li>
				</ul>
			</article>
			<div className="wrapper-parent">
				<div className="two-wrapper">
					<div className="input-container">
						<span className="input-name">text</span>
						<textarea onChange={handleData} defaultValue={data} spellCheck="false"></textarea>
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
					<button className="btn-submit" onClick={submitResult}>Submit</button>
					<button className="btn-submit" onClick={Download}>Download</button>
				</div>
			</div>
			<article className="content">
   			<h2>What is binary</h2>
   			<p>Throughout history almost every civilization has used a decimal number system with ten digits 0 through 9 all of the numbers we can possibly think of use some combination of those 10 digits, computers however operate very differently instead they use a number system that has just two digits 1 & 0 this system is called binary and your computer uses it all the time, computers need information in order to do what they do. this digital information or data is made up of something called bits.</p>
			</article>
			<article className="content">
				<h2>What is bits</h2>
				<p>Bit is short for binary digit meaning each bit is really just a single number either a 1 or a 0 these bits can be combined to create larger units like bytes megabytes and so on that we use to measure our files the larger a file is the more bits it has so something like a high resolution video is actually made up of millions and millions and millions of ones and zeros.</p>
			</article>
			<article className="content">
				<h2>How binary work</h2>
				<p>Let&apos;s think of binary as a light switch imagine that 1 represents the light switch being on and 0 represents it being off with binary the light is either on or off with no other possible States so these bits are strung together as different combinations of ones and zeros and they form a kind of code your computer then rapidly processes this code and translates it into data telling it what to do you.</p>
			</article>
			<article className="content">
				<h2>Why do computers use binary instead of the decimal system</h2>
				<p>Well as previously mentioned binary has two states off and on if computers were to use decimal there would be 10 states instead our computers would have to work a lot harder to process all of these, binary is easier for them to process and also takes up less space just like atoms make up everything around us in the real world everything in the digital world including video text pictures and more can be broken down into binary and even though we can&apos;t see them it&apos;s all a bunch of ones and zeros.</p>
			</article>
			<Footer/>
       </>

   );
}
