import { TinaMarkdown } from "tinacms/dist/rich-text";

// server code

// Page component
const MyBlogPost = (props) => {
  return (<>
    <h1>{props.data.title}</h1>
    <TinaMarkdown content={props.data.body} />
  </>)
}