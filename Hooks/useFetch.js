import { useState, useEffect, useRef } from "react"

export const useFetch = (url)=>{

    const isMounted = useRef(true);

    useEffect(()=>{
        return () =>{
            isMounted.current = false;
        }
    },[])

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data =>{
            if(isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data
                })
            }else{
                console.log('Componente desmontado')
            }
        })
    //   return () => {
    //     second
    //   }
    }, [url])

    return state;
    
}