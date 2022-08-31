import { useEffect, useState } from "react"

const useFetch = (url: string) =>{
   const [results, setResults] = useState(Array<any>);
   const [loading, setloading] = useState(false);
   const [error, setError] = useState("");

    useEffect(() => {
        setloading(true);
        fetch(url)
          .then(response => response.json())
          .then(data => {            
            setResults(data);
            setloading(false);
          })
          .catch((err) => {
            setError(err)
            setloading(false);
          })
    },[url]);

    return results;
//    return [
//     results,
//     // loading,
//     // error
//    ]
}

export default useFetch;