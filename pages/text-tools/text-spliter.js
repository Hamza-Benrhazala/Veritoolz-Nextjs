import Head from 'next/head'
import { useState } from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

export default function TextSeparator() {
	const [data, setData] = useState("")
	const [separator, setSeparator] = useState(":")
	const [leftSide, setLeftSide] = useState("")
	const [rightSide, setRightSide] = useState("")

	function handleData(e) {
		setData(e.target.value)
	}
	function handleSeparator(e) {
		setSeparator(e.target.value)
	}
	function handleLeftSide(e) {
		setLeftSide(e.target.value)
	}
	function handleRightSide(e) {
		setRightSide(e.target.value)
	}
	function submitResult() {
		let leftArr = []
		let rightArr = []
		setLeftSide("")
		setRightSide("")
		if(data.length > 0) {
			let left = `^(?:.*)${separator}`
			let right = `${separator}(?:.*)$`
			let re = RegExp(left, "gm")
			let re1 = RegExp(right, "gm")
			const leftAndRight = `^${separator}|${separator}$`
			let unwanted = RegExp(leftAndRight, "gm")
			data.match(re)?.forEach(line => {
				leftArr.push(line.replace(unwanted, ""))
			})
			data.match(re1)?.forEach(line => {
				rightArr.push(line.replace(unwanted, ""))
			})
			setLeftSide(leftArr.join("\n"))
			setRightSide(rightArr.join("\n"))
		}
	}

	return(
	   <>
		<Head>
				<title>Text spliter | veritoolz</title>
				<meta id="description" name="description" content="Quick & easy free online tool to split any text you want (html, json, csv) based on your prefered seperator word, with the ability to download the results as text file 100% for free no signup required." />
				<meta id="og-title" property="og:title" content="Text spliter | veritoolz" />
				<meta property="og:description" content="Quick & easy free online tool to split any text you want (html, json, csv) based on your prefered seperator word, with the ability to download the results as text file 100% for free no signup required."/>
			    <meta name="twitter:title" content="Text spliter | veritoolz"/>
			    <meta name="twitter:description" content="Quick & easy free online tool to split any text you want (html, json, csv) based on your prefered seperator word, with the ability to download the results as text file 100% for free no signup required."/>
			    <meta name="robots" content="all"/>
			    <meta name="keywords" content="text spliter, text separator, split text online"/>
			    <link rel="canonical" href="https://veritoolz.com/text-tools/text-spliter" />
			</Head>
		<Nav/>
		<article className="content">
			<h1>Text spliter</h1>
			<p>
				Quick & easy free online tool to split any text you want (html, json, csv) based on your prefered seperator word, with the ability to download the results as text file 100% for free no signup required.
			</p>
		</article>
		<article className="content">
			   			<h2>How to use</h2>
   			<ul className="how-to">
				<li>Put your text in the text area.</li>
				<li>Put your separator in the separator area.</li>
				<li>Click on the submit button and you&apos;ll get your result.</li>
				<li><span className="span-optional">optional:</span> click on the download button to download your result as text file.</li>
			</ul>
		</article>
		<div className="wrapper-parent">
		    <div className="result-container">
					<span className="input-name">text</span>
					<textarea onChange ={handleData} defaultValue={data} spellCheck="false"></textarea>
				</div>
				<div className="submit-set-box">
					<label>
		  				<span>Separator:</span>
		  				<input type="text" onChange ={handleSeparator} defaultValue={separator}/>
		  			</label>
					<button className="btn-submit" onClick={submitResult}>Submit</button>
				</div>
				<div className="two-wrapper" style={{marginTop: "20px"}} >
					<div className="input-container">
						<span className="input-name">left side</span>
						<textarea onChange={handleLeftSide} defaultValue={leftSide} spellCheck="false"></textarea>
					</div>
					<div className="input-container">
						<span className="input-name">right side</span>
						<textarea onChange={handleRightSide} defaultValue={rightSide} spellCheck="false"></textarea>
					</div>
				</div>
		</div>
		<article className="content">
 			<h2>Example</h2>
 			<p>In this basic example we will try to split an email to get both <span className="span-code">&quot;usermane&quot;</span> and <span className="span-code">&quot;domain name&quot;</span>  in a separate location.
 			</p>
 			<p>The demo text:</p>
 			<div className="code-playground">
 				username@website.com<br/>
 				example@domain.com
 			</div>
 			<p>To extract the target we will need two things:<br/>Separator:
 			</p>
 			<div className="code-playground">@</div>
 			<p>Right delimiter:</p>
 			<p>The result will be:<br/>Left side</p>
 			<div className="code-playground">username<br/>example</div>
 			<p>Right side</p>
 			<div className="code-playground">website.com<br/>domain.com</div>
		</article>
		<Footer/>
	   </>
   );
}
