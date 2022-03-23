import { useRouter } from 'next/router'
import Link from "next/link";
import { DATA } from "../utils/data"

export default function RelatedTools() {
  const Route = useRouter()
  const currentPage = Route.asPath.replace(/^\//g, "").split("/")
  const TargetCat = DATA.filter(tool => tool.categoryUrl === currentPage[0])
  const AnotherTools = TargetCat.map(tool => tool.categoryTools.filter(t => t.toolUrl !== currentPage[1]))
  const AnotherToolsTemplate = AnotherTools.map((tool, i) => {
    const haha = tool.map((Tool, i) => {
      return (
        <div key={`Similar-tool-${i}`} className="tools-category">
          <Link
          href={`/${currentPage[0]}/${Tool.toolUrl}`}
          >
            <a className="category-link">{Tool.toolName}</a>
          </Link>
          <p>{Tool.ToolDescription}</p>
        </div>
      )
    });
    return (
      <div key={`tool-container-${i}`} className="tools-container">
        {haha}
      </div>
    )
  })

  return(
    <div className="container">
      <h2 className="main-h2-container">Another useful tools</h2>
      {AnotherToolsTemplate}
    </div>
  );
}
