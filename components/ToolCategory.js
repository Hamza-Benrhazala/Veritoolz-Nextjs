import ToolContainer from "./ToolContainer";
export default function ToolCategory({CategoryName, CategoryUrl, ToolName}) {
	const tools = ToolName.map((tool, index) => 
       <ToolContainer
       key = {`tool-${index}`}
       ToolName = {tool?.toolName}
       ToolUrl = {tool?.toolUrl}
       Description = {tool?.ToolDescription}
       CategoryName = {CategoryName}
       CategoryUrl= {CategoryUrl}
       />
	)

	return(
       <div className="container">
			<h2 className="main-h2-container">{CategoryName}</h2>
			<div className="tools-container">
				{tools}
			</div>
		</div>
   );
}