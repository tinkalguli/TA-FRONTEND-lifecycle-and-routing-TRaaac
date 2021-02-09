export default function Tags(props) {
  const {handleClick, activeButton} = props;
  return (
    <ul className="tags flex-between" onClick={handleClick}>
      <li
        className={activeButton === "all" ? "active" : ""}
        data-id="all">All</li>
      <li
        className={activeButton === "javascript" ? "active" : ""}
        data-id="javascript">Javascript</li>
      <li
        className={activeButton === "ruby" ? "active" : ""}
        data-id="ruby">Ruby</li>
      <li
        className={activeButton === "java" ? "active" : ""}
        data-id="java">Java</li>
      <li
        className={activeButton === "css" ? "active" : ""}
        data-id="css">CSS</li>
      <li
        className={activeButton === "python" ? "active" : ""}
        data-id="python">Python</li>
    </ul>
  )
}