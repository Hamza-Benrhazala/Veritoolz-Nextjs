import Head from 'next/head'
import { saveAs } from 'file-saver'
import { useRef, useState } from "react"
import Nav from '../../components/Nav'
import Footer from "../../components/Footer"
import RelatedTools from "../../components/RelatedTools"

export default function RemoveDupes() {
	const [data, setData] = useState("")
	const [result, setResult] = useState("")
	const [asMultiLines, setAsMultiLines] = useState(true)
	const [asOneText, setAsOneText] = useState(false)
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
	function handleCheckBox() {
		setAsMultiLines(!asMultiLines);
		setAsOneText(!asOneText);
	}
	function handleResult(e) {
		setResult(e.target.value);
	}
	function submitResult() {
		setResult("");
		if(data.length > 0) {
			if(asMultiLines) {
				const uniqueSet = new Set(data.split("\n"));
				const ResultArr = [...uniqueSet];
				setResult(ResultArr.join("\n"));
			}
			if(asOneText) {
				const uniqueSet = new Set(data.split(/\s|\n/g));
				console.log(uniqueSet)
				const ResultArr = [...uniqueSet];
				setResult(ResultArr.join(" "));
			}

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
			saveAs(blob,`Duplicates removed From Text.txt`);
		}
	}

	return(
       <>
			<Head>
				<title>Remove duplicates from text | veritoolz</title>
				<meta id="description" name="description" content="Best tools to remove duplicated lines or words from your text online with the ability to handle large texts and also to choose which mode you want! (multi-line mode or text mode)." />
				<meta id="og-title" property="og:title" content="Add a prefix or suffix to Text | veritoolz" />
				<meta property="og:description" content="Best tools to remove duplicated lines or words from your text online with the ability to handle large texts and also to choose which mode you want! (multi-line mode or text mode)."/>
			    <meta name="twitter:title" content="Remove duplicates from text | veritoolz"/>
			    <meta name="twitter:description" content="Best tools to remove duplicated lines or words from your text online with the ability to handle large texts and also to choose which mode you want! (multi-line mode or text mode)."/>
			    <meta name="robots" content="all"/>
			    <meta name="keywords" content="remove duplicate line, remove duplicate,
			    remove duplicate word, remove duplicate line from text"/>
			    <link rel="canonical" href="https://veritoolz.com/text-tools/remove-duplicates-from-text" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Remove duplicates from text</h1>
				<p>
					Best tools to remove duplicated lines or words from your text online with the ability to handle large texts and also to choose which mode you want! (multi-line mode or text mode).
				</p>
			</article>
			<article className="content">
				   			<h2>How to use</h2>
   			<ul className="how-to">
					<li>Put your text in the text area.</li>
					<li><span className="span-optional">optional:</span> Multi-line: treat your text as lines.</li>
					<li><span className="span-optional">optional:</span> Text: treat your text as one text.</li>
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
					<div className="flex-label nocolumn">
						<span>Multi-line:</span>
						<input type="checkbox" onChange={handleCheckBox} checked={asMultiLines}/>
						<span style={{marginLeft: "5px"}} >Text:</span>
						<input type="checkbox" onChange={handleCheckBox} checked={asOneText}/>
					</div>
					<button className="btn-submit" onClick={submitResult}>Submit</button>
					<button className="btn-submit" onClick={Download}>Download</button>
				</div>
			</div>
			<article className="content">
	 			<h2>Example</h2>
	 			<p>In this basic example we will try to demonstrate how you can use text spliter with both modes <span className="span-code">&quot;Multi-line&quot;</span> and <span className="span-code">&quot;text&quot;</span> to remove duplicates from your text.<br/>
	 				1) will start with <span className="span-code">&quot;Multi-line&quot;</span> mode.<br/> multi-line is basically a mode that treat your text as a bunch of lines, it compare those lines and see if there is a duplicated line and remove it.
	 			</p>
	 			<p>The demo text:</p>
	 			<div className="code-playground">
	 				Hello world<br/>
	 				Hello world
	 			</div>
	 			<p>The result will be:</p>
	 			<div className="code-playground">Hello world</div>
	 			<p>2) the second one is <span className="span-code">&quot;text&quot;</span> mode.</p>
	 			<p>text mode will treat your as a bunch of words and try compare every word in your text and see if there is a duplicate then remove it.<br/>The demo text:</p>
	 			<div className="code-playground">
	 				Hello boys, Hello girls.
	 			</div>
	 			<p>The result will be:</p>
	 			<div className="code-playground">
	 				Hello boys, girls.
	 			</div>
	 			<p className="small-note">note that both <span className="span-code">&quot;multi-line&quot;</span> mode and <span className="span-code">&quot;text&quot;</span> mode are case sensitive.</p>
			</article>
			<RelatedTools />
			<Footer/>
       </>
   );
}

