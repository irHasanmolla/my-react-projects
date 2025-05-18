import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
      const abortCont = new AbortController()
      const signal = abortCont.signal

        fetch(url, {signal: signal})
          .then(res =>{
            if (!res.ok) {
              throw Error("Link Problem");
            } 
            return res.json();
          })
          .then(data => {
            setData(data)
            setIsLoading(false)
          })
          .catch((err)=>{
            if (err.name === 'AbortError') {
              console.log('fetch Aborted');
            } else{
              setError(err.message)
              setIsLoading(false)
            }
          });
        return () =>{abortCont.abort()};
    }, [url])
  return (
    {data, isLoading, error}
  )
}
 
export default UseFetch;