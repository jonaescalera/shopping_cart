import { useEffect, useState } from "react"


const useFetch = <T>(url: string) /*: [T[] | undefined, boolean, String] */=> {
   const [results, setResults] = useState<T[]>();
   const [isLoading, setloading] = useState<boolean>(false);
   const [error, setError] = useState<String>("");

    useEffect(() => {
        setloading(true);
        fetch(url)
          .then(response => response.json())
          .then(data => {            
            setResults(data.results);
            setloading(false);
          })
          .catch((err) => {
            setError(err)
            setloading(false);
          })
    },[url]);

    //return results;
   return [ results, isLoading, error ] as const
}

export default useFetch;