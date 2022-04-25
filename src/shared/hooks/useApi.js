import React,{useState,useCallback, useRef, useEffect} from 'react'

export default function useApi() {
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState();

    const activeHttpRequests=useRef([]);

    const sendRequest= useCallback(async(url, method='GET',headers={},body=null)=>{
    setisLoading(true);
    const httpAbortController= new AbortController();
    activeHttpRequests.current.push(httpAbortController);
    try{
      const response= await fetch(url,{
          method,
          body,
          headers,
          signal:httpAbortController.signal //asign abort controller to the request , which we can use to cancel request later on unmount. 
      });
      const responseData= await response.json();
      if(!response.ok)
      throw new Error(responseData.message);

      setisLoading(false);
      return responseData;
    } catch(err){
      seterror(err);
      setisLoading(false);
      throw err;
    }
   

    },[]);

    const clearError =()=>{
        seterror(null);
    }

    useEffect(() => {
     
      /* Used to abort request if user component unmounts from the page */
      return () => {
        activeHttpRequests.current.forEach(abortCtrl =>
        abortCtrl.abort() );
      }
    }, [])
    

  return {isLoading,error,sendRequest,clearError}
}
