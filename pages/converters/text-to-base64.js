import Head from 'next/head'
import { saveAs } from 'file-saver'
import { useRef, useState } from "react"
import Nav from '../../components/Nav'
import Footer from "../../components/Footer"
import RelatedTools from "../../components/RelatedTools"

export default function TextToBase64() {
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
		setResult("");
		if(data.length > 0) {
		    setResult(btoa(data));
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
			saveAs(blob,`Text to base64 by veritoolz.txt`);
		}
	}

	return(
       <>
			<Head>
				<title>Text to base64 | veritoolz</title>
				<meta id="description" name="description" content="Free online tool to convert text or string to base64 with the ability to downoad the result as a text file for free. The easiest way to encode text to base64 100% for free." />
				<meta id="og-title" property="og:title" content="Text to base64 | veritoolz" />
				<meta property="og:description" content="Free online tool to convert text or string to base64 with the ability to downoad the result as a text file for free. The easiest way to encode text to base64 100% for free."/>
			    <meta name="twitter:title" content="Text to base64 | veritoolz"/>
			    <meta name="twitter:description" content="Free online tool to convert text or string to base64 with the ability to downoad the result as a text file for free. The easiest way to encode text to base64 100% for free."/>
			    <meta name="robots" content="all"/>
			    <meta name="keywords" content="base64 encoder, base64 encode, encode text to base64,
			    string to base64, convert string to base64"/>
			    <link rel="canonical" href="https://veritoolz.com/converters/text-to-base64" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Encode text to base64</h1>
				<p>
					Free online tool to convert text or string to base64 with the ability to downoad the result as a text file for free. The easiest way to encode text to base64 100% for free.
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
								<svg onClick={copyToClipbloard} version="1.1" className="clipboard-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" xmlSpace="preserve" width="22" height="22">
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
			<RelatedTools/>
			<Footer/>
       </>

   );
}
