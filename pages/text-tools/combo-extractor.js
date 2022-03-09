import Head from 'next/head'
import { saveAs } from 'file-saver'
import { useRef, useState } from "react"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"

export default function ComboExtractor() {
	const [data, setData] = useState("")
	const [result, setResult] = useState("")
	const [separator, setSeparator] = useState(":")
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
	function handleseparator(e) {
		setSeparator(e.target.value);
	}
	function handleResult(e) {
		setResult(e.target.value);
	}
	function submitResult() {
		setResult("");
		let resultArr = []
		let separatorArr = []
		if(data.length > 0) {
			separator.split("").forEach(char => {
				if(!char.match(/\s/) && char.match(/\W/)) {
					separatorArr.push(`\\` + char)
				}
				else {
					separatorArr.push(char)
				}
			})
			let target = `(?:[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}\\${separator}\\S+)`
			// eslint-disable-next-line
			let re = new RegExp(target, "gm")
			data.match(re)?.forEach(line => {
				resultArr.push(line)
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
			saveAs(blob,`Combo extracted From Text.txt`);
		}
	}
	return(
       <>
			<Head>
				<title>Extract combo from text | veritoolz</title>
				<meta id="description" name="description" content="extract & download all combos from text easily and for free." />
				<meta id="og-title" property="og:title" content="Extract combo from text | veritoolz" />
				<meta property="og:description" content="extract & download all combos from text easily and for free."/>
			    <meta name="twitter:title" content="Extract combo from text | veritoolz"/>
			    <meta name="twitter:description" content="extract & download all combos from text easily and for free."/>
			    <meta name="robots" content="all"/>
			    <meta name="keywords" content="combo extractor, extract combo from text"/>
			    <link rel="canonical" href="https://veritoolz.com/text-tools/combo-extractor" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Combo extractor</h1>
				<p>
				With this tool you can extract & download all combos from text easily and for free.
				</p>
			</article>
			<article className="content">
				   			<h2>How to use</h2>
   			<ul className="how-to">
					<li>Put your text in the text area.</li>
					<li><span className="span-optional">optional:</span>Put your separator in the specified areas.</li>
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
								<span>Separator:</span>
			  					<input className="input-medium" type="text" onChange={handleseparator} defaultValue={separator}/>
							</div>
			  			</label>
						<button className="btn-submit" onClick={submitResult}>Submit</button>
						<button className="btn-submit" onClick={Download}>Download</button>
					</div>
			</div>
			<Footer/>
       </>
   );
}
