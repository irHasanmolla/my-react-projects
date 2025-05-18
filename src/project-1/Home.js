import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
  const {data: blogs, isLoading, error} = UseFetch("http://localhost:8000/blogs")
  
  return ( 
    <div className="home">
      {error && <div>Error...</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs :"/>}
    </div>
   );
}
 
export default Home;