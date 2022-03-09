import Link from "next/link";
import CookieConsent from "react-cookie-consent";

export default function Footer() {

	return(
   	<>
       <footer>
	 		<div className="footer-container">
	 			<div className="footer-links">
	 				<Link href="/privacy-policy">Privacy & Security</Link>
	 			</div>
	 			<p className="copyright">veritoolz. All rights reserved 2022.</p>
	 		</div>
 		</footer>
	 	<CookieConsent
	 	  location="bottom"
	 	  buttonText="OK"
	 	  cookieName="Enabled"
	 	  style={{ background: "#1b232e", fontSize: "14.5px" }}
	 	  buttonStyle={{background: "white", color: "#1b232e", fontSize: "13px", margin: "0px 15px 12px 15px" }}
	 	  expires={150}
	 	>
	 	  This website uses cookies to ensure you get the best experience on our website.
	 	</CookieConsent>
	</>
   );
}
