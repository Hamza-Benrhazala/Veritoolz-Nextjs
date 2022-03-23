import Head from 'next/head'
import { saveAs } from 'file-saver'
import { useRef, useState } from "react"
import Nav from '../../components/Nav'
import Footer from "../../components/Footer"
import RelatedTools from "../../components/RelatedTools"

export default function Hashtag() {
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
		setData(e.target.value)
	}
	function handleResult(e) {
		setResult(e.target.value)
	}
	function submitResult() {
		setResult("")
		if(data.length > 0) {
			const ResultArr = []
			data.split("\n").forEach(line => {
				if(line.length > 0 ) {
					ResultArr.push(line)
				}
			})
			setResult(ResultArr.join("\n"))

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
			saveAs(blob,`Empty lines removed From Text.txt`);
		}
	}

	return(
       <>
			<Head>
				<title>Remove empty lines | veritoolz</title>
				<meta id="description" name="description" content="An online tool to remove empty lines from your text with the ability to download the result as a text file, Don't waste your precious time on silly things let us to the job for you.
" />
				<meta id="og-title" property="og:title" content="Remove empty lines from text | veritoolz" />
				<meta property="og:description" content="An online tool to remove empty lines from your text with the ability to download the result as a text file, Don't waste your precious time on silly things let us to the job for you.
"/>
			    <meta name="twitter:title" content="Remove empty lines | veritoolz"/>
			    <meta name="twitter:description" content="An online tool to remove empty lines from your text with the ability to download the result as a text file, Don't waste your precious time on silly things let us to the job for you.
"/>
			    <meta name="robots" content="all"/>
			    <meta name="keywords" content="remove empty line from text, empty line remover online,
			    remove blank line from text, blank line remover online"/>
			    <link rel="canonical" href="https://veritoolz.com/text-tools/remove-empty-lines-from-text" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Remove empty lines from text</h1>
				<p>
					An online tool to remove empty lines from your text with the ability to download the result as a text file, Don&apos;t waste your precious time on silly things let us to the job for you.
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
