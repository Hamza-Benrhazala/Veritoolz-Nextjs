import Link from "next/link";
import { useRef } from "react";
import { DATA } from "../utils/data"

export default function Nav() {


	// const [navData, setNavData] = useState([]);

	const nav = useRef(null)
	const MenuContainer = useRef(null)
	const Menu = useRef(null)
	const shadow = useRef(null)
	const dropDownMenu = useRef(null)
	const HamburgerIcon = useRef(null)
	const CloseIcon = useRef(null)
	function NumDynamicSort(property) {
	  var sortOrder = 1;

	  if(property[0] === "-") {
	      sortOrder = -1;
	      property = property.substr(1);
	  }

	  return function (a,b) {
	      if(sortOrder === -1) {
	          return (a[property]) - (b[property]);
	      } else {
	          return (b[property])- (a[property]);
	      }
	  }
	}
	DATA.sort(NumDynamicSort("-index"))
	// useEffect(() => {
		// setNavData(DATA);
		// if (categoryData === undefined) {
		// 	axios.get(`${BASE_URL}/category/`)
		// 	.then(res => {
		// 		// res?.data?.sort(NumDynamicSort("-index"))
		// 		setNavData(res?.data)
		// 	})
		// 	.catch(err => {
		// 		console.log(err)
		// 	})
		// } else {
		// 	setNavData(categoryData)DATA
		// }
	// }, []);

	let menuOpen = false

	function handleMenuContainer() {
		if (menuOpen) {closeMenu();}
	}
	function openMenu() {
		menuOpen = true
		MenuContainer.current.classList.add("inactive")
		Menu.current.classList.add("open")
		shadow.current.classList.add("active")
		document.body.classList.add("inactive")
		HamburgerIcon.current.classList.add("closed")
		CloseIcon.current.classList.add("opened")
	}
	function closeMenu() {
		menuOpen = false
		MenuContainer.current.classList.remove("inactive")
		Menu.current.classList.remove("open")
		shadow.current.classList.remove("active")
		document.body.classList.remove("inactive")
		HamburgerIcon.current.classList.remove("closed")
		CloseIcon.current.classList.remove("opened")
	}
	function handleClicks(e) {
		if(e.target.id) {
			const dropdown = document.querySelector(`.dropdown-menu#${e.target.id}`)
			if(dropdown && !dropdown.className.includes("open")) {
				dropdown.classList.add("open")
			}
			else {
				dropdown.classList.remove("open")
			}
		}
	}

	const navTemplate = DATA?.map((item, i) => {
		const link = item?.categoryTools?.map((link, i) => {
			return (
				link.nav ? <li key={`link-${i}`} onClick={closeMenu} >
					<Link href={`/${item?.categoryUrl}/${link?.toolUrl}`}>{link?.toolName}</Link>
				</li> : undefined
			);
		})

		return (
			<li key={`li-${i}`} id={`li-${i}`} onClick={handleClicks} className="ulNav-li">
				{item?.category}
				<svg id={`li-${i}`} className="svg-caret" width="15" height="15" viewBox="0 0 16 16">
		       		<path id={`li-${i}`} d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
     		</svg>
     		<ul id={`li-${i}`} ref={dropDownMenu} className="dropdown-menu">
     				{link}
     		</ul>
			</li>
		);
	})

	return(
   	<nav ref={nav}>
	 		<div className="logo-box">
		 		<Link href="/">
		 			<a>
		 				<img className="logo" src="../public/VERITOOLZ.png" alt="veritoolz logo"/>
		 			</a>
		 		</Link>
	 		</div>
	 		<div
	 		className="ulNav-container"
	 		ref={MenuContainer}
	 		>
		 		<ul ref={Menu} className="ulNav">
		 			{navTemplate}
		 		</ul>
		 		<div ref={shadow} className="shadow" onClick={handleMenuContainer}></div>
	 		</div>
	 		<svg
		 		xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
		 		className="svg-menu"
		 		ref={HamburgerIcon}
		 		onClick={openMenu}
		 		width="30"
		 		height="30"
		 		viewBox="0 0 24 24"
			>
		 		<line x1="2" x2="22" y1="12" y2="12" fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="2">
		 		</line>
		 		<line x1="2" x2="22" y1="6" y2="6" fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="2">
		 		</line>
		 		<line x1="2" x2="22" y1="18" y2="18" fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="2">
		 		</line>
		 		<line x1="2" x2="22" y1="12" y2="12" fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="2">
		 		</line>
		 		<line x1="22" x2="2" y1="12" y2="12" fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="2">
		 		</line>
	 		</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="svg-close"
				onClick={closeMenu}
				ref={CloseIcon}
				width="30"
				height="30"
				viewBox="0 0 50 50"
				style={{fill: "white"}}
			>
				<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z">
				</path>
			</svg>
	 	</nav>
   );
}
