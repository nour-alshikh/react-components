import {useEffect, useState} from "react";

export default function useFetch(url  , options ={}) {
    const [pending, setPending] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState([])

    async function fetchData  () {
            setPending(true)
        try {
            const res = await fetch(url , {...options})
            const data = await res.json()
             if (data){
                 setData(data)
                 setPending(false)
             }
        }
        catch(err){
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchData();
    },[url])

    return{pending , error , data}
}