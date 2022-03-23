import Head from 'next/head';
import { saveAs } from 'file-saver';
import { useRef, useState } from "react"
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import RelatedTools from "../../components/RelatedTools"

export default function PrefixSuffix() {
	const [prefix, setPrefix] = useState([""])
	const [text, setText] = useState([""])
	const [suffix, setSuffix] = useState([""])
	const [result, setResult] = useState("")

	const [ELForPrefix, setELForPrefix] = useState(false)
	const [ELForText, setELForText] = useState(false)
	const [ELForSuffix, setELForSuffix] = useState(false)
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
	function handlePrefix(e) {
		setPrefix(e.target.value.split("\n"))
	}
	function handleText(e) {
		setText(e.target.value.split("\n"))
	}
	function handleSuffix(e) {
		setSuffix(e.target.value.split("\n"))
	}
	function handleResult(e) {
		setResult(e.target.value)
	}
	function submitResult(e) {
		let textLength = text.join("").length
		let prefixLength = prefix.join("").length
		let suffixLength = suffix.join("").length
		let resultText = []
		setResult("")
		if(text.join("").length > 0) {
			prefix.forEach(prefixItem => {
				if(ELForPrefix && prefixLength > 0) {
					if(prefixItem.match(/\S/g)) {
						text.forEach(textItem => {
							if(ELForText && textLength > 0) {
								if(textItem.match(/\S/g)) {
									suffix.forEach(suffixItem => {
										if (ELForSuffix && suffixLength > 0) {
											if(suffixItem.match(/\S/g)) {
												resultText.push(prefixItem + textItem + suffixItem)
											}
										} else {
											resultText.push(prefixItem + textItem + suffixItem)
										}
									})
								}
							}
							else {
								suffix.forEach(suffixItem => {
									if (ELForSuffix && suffixLength > 0) {
										if(suffixItem.match(/\S/g)) {
											resultText.push(prefixItem + textItem + suffixItem)
										}
										} else {
											resultText.push(prefixItem + textItem + suffixItem)
										}
								})
							}
						})
					}
				}
				else {
					text.forEach(textItem => {
						if(ELForText && textLength > 0) {
							if(textItem.match(/\S/g)) {
								suffix.forEach(suffixItem => {
									if (ELForSuffix && suffixLength > 0) {
										if(suffixItem.match(/\S/g)) {

											resultText.push(prefixItem + textItem + suffixItem)
										}
									} else {
										resultText.push(prefixItem + textItem + suffixItem)
									}
								})
							}
						}
						else {
							suffix.forEach(suffixItem => {
								if (ELForSuffix && suffixLength > 0) {
										if(suffixItem.match(/\S/g)) {
											resultText.push(prefixItem + textItem + suffixItem)
										}
									} else {
										resultText.push(prefixItem + textItem + suffixItem)
									}
							})
						}
					})
				}
			})
			setResult(resultText.join("\n"))
			console.log({prefix, suffix, text, textLen: text.length, result: resultText})
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
			saveAs(blob,`Prefix-Suffix text.txt`);
		}
	}

	return(
	   	<div className="Wrapper">
			<Head>
				<title>Prefix And Suffix Text | veritoolz</title>
				<meta id="description" name="description" content="Best tool to prefix and suffix your text online with the option to ignore empty lines automaticlly out of the box, you can also download the result if you want, try this tool and save your time. It's 100% for free." />
				<meta id="og-title" property="og:title" content="Add a prefix or suffix to Text | veritoolz" />
				<meta property="og:description" content="Best tool to prefix and suffix your text online with the option to ignore empty lines automaticlly out of the box, you can also download the result if you want, try this tool and save your time. It's 100% for free."/>
		    <meta name="twitter:title" content="Add a prefix/suffix to Text | veritoolz"/>
		    <meta name="twitter:description" content="Best tool to prefix and suffix your text online with the option to ignore empty lines automaticlly out of the box, you can also download the result if you want, try this tool and save your time. It's 100% for free."/>
		    <meta name="robots" content="all"/>
		    <meta name="keywords" content="prefix text and download, prefix text online,
		    prefix suffix generator, prefix generator, suffix generator, prefix suffix,
		     bulk prefix suffix, bulk prefix, bulk suffix"/>
	     	<link rel="canonical" href="https://veritoolz.com/text-tools/prefix-suffix-text" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Prefix and suffix text</h1>
				<p>
					Best tool to prefix and suffix your text online with the option to ignore empty lines automaticlly out of the box, you can also download the result if you want, try this tool and save your time. It&apos;s 100% for free.
				</p>
			</article>
			<article className="content">
   			<h2>How to use</h2>
   			<ul className="how-to">
					<li>Put your text in the text area.</li>
					<li>Put your prefix or suffix keywords in the prefix or suffix area.</li>
					<li>Click on the submit button and will get your result in the result area.</li>
					<li><span className="span-optional">optional:</span> check the &quot;ignore empty lines&quot; box to ignore empty line.</li>
					<li><span className="span-optional">optional:</span> click on the download button to download your result as text a file.</li>
				</ul>
			</article>
			<div className="three-wrapper">
				<div className="input-container">
					<span className="input-name">prefix</span>
					<textarea onChange ={handlePrefix} spellCheck="false"></textarea>
					<div className="checkbox-container">
						<input type="checkbox" onChange ={()=> setELForPrefix(!ELForPrefix)} checked={ELForPrefix}/>
						<span>Ignore empty lines</span>
					</div>
				</div>
				<div className="input-container">
					<span className="input-name">text</span>
					<textarea onChange ={handleText} spellCheck="false"></textarea>
					<div className="checkbox-container">
						<input type="checkbox" onChange ={()=> setELForText(!ELForText)} checked={ELForText}/>
						<span>Ignore empty lines</span>
					</div>
				</div>
				<div className="input-container">
					<span className="input-name">suffix</span>
					<textarea onChange ={handleSuffix} spellCheck="false"></textarea>
					<div className="checkbox-container">
						<input type="checkbox" onChange ={()=> setELForSuffix(!ELForSuffix)} checked={ELForSuffix}/>
						<span>Ignore empty lines</span>
					</div>
				</div>
			</div>
			<div className="submit-set-box">
				<button className="btn-submit" onClick ={submitResult} >Submit</button>
				<button className="btn-submit" onClick ={Download} >Download</button>
			</div>
		    <div className="result-container">
				<span className="input-name">result</span>
				<textarea ref={resultRef} onChange ={handleResult} value={result} spellCheck="false"></textarea>
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
			<RelatedTools/>
			<Footer/>
		</div>
   );
}
