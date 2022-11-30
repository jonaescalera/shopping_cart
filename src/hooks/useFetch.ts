import { useEffect, useReducer, useRef} from "react"

type ACTION = 
 | {type: "API_REQUEST",  }
 | {type: "FETCH_DATA", payload: [] }
 | {type: "ERROR", payload: string}

type State = {
  data?: [],
  loading: boolean,
  error?: string
} 

const initialState: State = {
  data: [],
  loading: false,
  error: undefined
}

function reducer(state: State, action: ACTION): State {

  switch (action.type) {
    case "API_REQUEST": 
      return {...state, loading: true}
    case "FETCH_DATA": 
      return {...state, data: action.payload, loading: false}
    case "ERROR": 
      return {...state, error: action.payload, loading: false}
  
    default:
      return state;
  }
}

const useFetch = (url: string) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const cache = useRef<any>({});
   useEffect(() => {
    let cancelRequest = false;
      if(!url) return;

      const fetchData = async () =>{
        dispatch({type: "API_REQUEST"});
        if(cache.current[url]){
          const data = cache.current[url];
          dispatch({type:"FETCH_DATA", payload: data});
        }else{
          try {
            const response = await fetch(url);
            const data = await response.json();
            cache.current[url] = data;
            if (cancelRequest) return;
            dispatch({type:"FETCH_DATA", payload: data});

          } catch (e) {
            if (cancelRequest) return;
            dispatch({type:"ERROR", payload: (e as Error).message})
          }
          
        }
      }
      fetchData();

      return () => { cancelRequest = true };
     
   }, [url])

   return state;
}

export default useFetch;