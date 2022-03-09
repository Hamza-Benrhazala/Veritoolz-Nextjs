import Link from "next/link";

export default function ToolContainer({ToolName, ToolUrl, Description, CategoryName, CategoryUrl}) {
  return(
	   	<div className="tools-category">
			<Link
      href={`/${CategoryUrl}/${ToolUrl}`}
      >
        <a className="category-link">{ToolName}</a>
      </Link>
			<p>{Description}</p>
		</div>
   );
}
