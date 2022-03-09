import Head from 'next/head'
import { saveAs } from 'file-saver';
import { useRef, useState } from "react"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"

export default function ExtractData() {
	const [data, setData] = useState("")
	const [result, setResult] = useState("")
	const [leftText, setLeftText] = useState("")
	const [rightText, setRightText] = useState("")
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
	function handleLeftText(e) {
		setLeftText(e.target.value);
	}
	function handleRightText(e) {
		setRightText(e.target.value);
	}
	function handleResult(e) {
		setResult(e.target.value);
	}
	function submitResult() {
		setResult("");
		let resultArr = []
		let RightTextArr = []
		let LeftTextArr = []
		if(data.length > 0) {
			rightText.split("").forEach(char => {
				if(!char.match(/\s/) && char.match(/\W/)) {
					RightTextArr.push(`\\` + char)
				}
				else {
					RightTextArr.push(char)
				}
			})
			leftText.split("").forEach(char => {
				if(!char.match(/\s/) && char.match(/\W/)) {
					LeftTextArr.push(`\\` + char)
				}
				else {
					LeftTextArr.push(char)
				}
			})
			const rightTextFormated = RightTextArr.join("")
			const leftTextFormated = LeftTextArr.join("")
			const leftAndRight = `^${leftTextFormated}|${rightTextFormated}$`
			let target = `${leftTextFormated}(?:.*)[^\\w]${rightTextFormated}`
			let re = RegExp(target, "gm")
			let unwanted = RegExp(leftAndRight, "gm")
			data.match(re)?.forEach(line => {
				resultArr.push(line.replace(unwanted, "").trim())
			})
			setResult(resultArr.join("\n"))
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
			saveAs(blob,`Data extracted From Text.txt`);
		}
	}
	return(
       <>
			<Head>
				<title>Extract data from text | veritoolz</title>
				<meta id="description" name="description" content="Best online tool to extract any data you want from your text in a quick and easy way, use this tool if you want to stay away from regex's nightmares. It's 100% for free." />
				<meta id="og-title" property="og:title" content="Add a prefix or suffix to Text | veritoolz" />
				<meta property="og:description" content="Best online tool to extract any data you want from your text in a quick and easy way, use this tool if you want to stay away from regex's nightmares. It's 100% for free."/>
			    <meta name="twitter:title" content="Extract data from text | veritoolz"/>
			    <meta name="twitter:description" content="Best online tool to extract any data you want from your text in a quick and easy way, use this tool if you want to stay away from regex's nightmares. It's 100% for free."/>
			    <meta name="robots" content="all"/>
			    <meta name="keywords" content="extract data from text, extract fragment from text,
			    extract text, extract from text"/>
			    <link rel="canonical" href="https://veritoolz.com/text-tools/extract-data-from-text" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Extract data from text</h1>
				<p>
					Best online tool to extract any data you want from your text in a quick and easy way, use this tool if you want to stay away from regex&apos;s nightmares. It&apos;s 100% for free.
				</p>
			</article>
			<article className="content">
   			<h2>How to use</h2>
   			<ul className="how-to">
					<li>Put your text in the text area.</li>
					<li>Put your left delimeter and right delimeter in the specified areas.</li>
					<li>Click on the submit button and will get your result in the result area.</li>
					<li><span className="span-optional">optional:</span> click on the download button to download your result as text a file.</li>
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
						<label className="flex-label">
							<div>
								<span>Left delimeter:</span>
			  					<input className="input-medium" type="text" onChange={handleLeftText} defaultValue={leftText}/>
							</div>
							<div>
								<span>Right delimeter:</span>
			  					<input className="input-medium" type="text" onChange={handleRightText} defaultValue={rightText}/>
							</div>
			  			</label>
						<button className="btn-submit" onClick={submitResult}>Submit</button>
						<button className="btn-submit" onClick={Download}>Download</button>
					</div>
			</div>
			<article className="content">
   			<h2>Example</h2>
   			<p>In this example we&apos;ll extract the number <span className="span-code">&quot;26&quot;</span> From the text below.
   			</p>
   			<p>The demo text:</p>
   			<div className="code-playground">
   				The english alphabet consists of 26 letters.
   			</div>
   			<p>To extract the target we will need two things:<br/>Left delimiter:
   			</p>
   			<div className="code-playground">consists of</div>
   			<p className="small-note">note that using <span className="span-code">&quot;of&quot;</span> only is also correct in this situation.
   			</p>
   			<p>Right delimiter:</p>
   			<div className="code-playground">letters</div>
   			<p className="small-note">note that <span className="span-code">&quot;letters.&quot;</span> is also correct in this situation.</p>
   			<p>The result:</p>
   			<div className="code-playground">26</div>
			</article>
			<Footer/>
       </>
   );
}
