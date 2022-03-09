import { useState, useEffect } from "react"
import ToolCategory from "./ToolCategory";
import WaitongForData from "./WaitingForData.js";
// import axios from "axios";

export default function Main({ DATA }) {

	const [categoryData, setCategoryData] = useState([]);
	const [error, setError] = useState("");

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
	// 	DATA.sort(NumDynamicSort("-index"))
	// 	setCategoryData(DATA)
	// 	setError("")
	// 	// axios.get(`${BASE_URL}/category/`)
	// 	// .then(res => {
	// 	// 	setError("")
	// 	// 	res?.data?.sort(NumDynamicSort("-index"))
	// 	// 	setCategoryData(res?.data)
	// 	// })
	// 	// .catch(err => {
	// 	// 	setError("Something went wrong.")
	// 	// })
	// }, [])

	const CategoryContainers = DATA?.map((data, i) =>
		<ToolCategory
		key = {`category-${i}`}
		CategoryName = {data?.category}
		CategoryUrl = {data?.categoryUrl}
		ToolName = {data?.categoryTools}
		/>
	)
	function reloadPage() {
		window.location.reload();
	}
	const errorTemplate =
	<div className="error-container">
		<div className="error">
			<h2>{error}</h2>
			<button className="try-again-btn" onClick={reloadPage}>Try again</button>
		</div>
	</div>

	return(
		<main>
		 	{ DATA?.length > 0 ? CategoryContainers : <WaitongForData/> }
		 	{error.length > 0 ? errorTemplate : undefined}
		</main>
   );
}




