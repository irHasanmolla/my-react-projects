import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setTimeout(() => {
      fetch(url)
        .then(res=>{
          if (!res.ok){
            throw Error ("Something isn't right!")
          }
          return res.json();
        })
        .then((data)=>{
          setData(data)
          setIsLoading(false)
        })
        .catch(err=>{
          setError(err.message)})
          setIsLoading(false)
    }, 500);
  }, [url]);

  return (
    {data, isLoading, error}
   );
}
 
export default UseFetch;