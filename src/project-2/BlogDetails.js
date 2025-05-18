import { useParams } from "react-router-dom";
import UseFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const {id} = useParams()
  const history = useHistory()
  
  const {data: blogs, isLoading, error} = UseFetch('http://localhost:8000/blogs/' + id)

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blogs.id, {
      method: 'DELETE'
    }).then(()=>{
      history.push('/')
    })
  }

  
  return ( 
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>{blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;