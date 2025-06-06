import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title}) => {
  return ( 
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </Link>
        </div>
      ))}
    </div>

   );
}
 
export default BlogList;