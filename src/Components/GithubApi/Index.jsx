import {useEffect, useState} from "react";
import User from "./User.jsx";

export default function Index(){
    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = ()=>{
        setError("")
        fetchUser()
    }

    const fetchUser= async ()=>{
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()

        if (data && data.url !== undefined){
            console.log(data)
            setUserData(data)
            setUserName("")
            setLoading(false)
        }

        if(data && data.status==="404"){
            setError(data.message)
            setLoading(false)
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchUser()
    },[])



    return <>
     <div>
                <div className="p-4 flex justify-center items-center gap-3">
                    <input type="text" className="border-2 rounded-md py-1 px-2" placeholder="Enter User name..."
                           name="username" value={userName} onChange={(e) => setUserName(e.target.value)}/>

                    <button className="bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer"
                            onClick={handleSubmit}>
                        Search
                    </button>
                </div>
            </div>
        {loading ? "Loading..." : error ?
            <p className="text-center text-red-600 py-4 text-4xl">  {error}   </p> :
                <User userData={userData} />


        }
</>

}