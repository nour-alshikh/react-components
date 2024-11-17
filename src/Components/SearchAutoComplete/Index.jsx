import {useEffect, useState} from "react";
import Suggestions from "./Suggestions.jsx";

export default function Index(){
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [filteredUsers, setFilteredUsers] = useState([])
    const [showDropDown, setShowDropDown] = useState(false)

    async function fetchUsers(){
        setLoading(true)
        const response = await fetch('https://dummyjson.com/users?limit=150')
        const data = await response.json();

        if(data){
            setLoading(false)
            setUsers(data.users)
        }
    }

    console.log(users)

    const handleSearchChange = (event) => {

        let query = event.target.value.toLowerCase();

        setSearch(query)
        if(query.trim().length > 1){
          // const filteredData = users && users.length ? users.filter((user) =>user.firstName.toLowerCase().includes(query.toLowerCase())) : []
          const filteredData = users && users.length ? users.filter((user) =>user.firstName.toLowerCase().indexOf(query) > -1) : []

            setFilteredUsers(filteredData)

            setShowDropDown(true)
        } else{
            setFilteredUsers(users)
            setShowDropDown(false)
        }
    }

    const handleClick = (event) => {
        setShowDropDown(false)
        setSearch(event.target.innerHTML)
        setFilteredUsers([])
    }


    useEffect(() => {
        fetchUsers()
    }, []);

    if(loading){
        return  <p className="text-center font-bold text-3xl text-red-600">Loading...</p>
    }

    return (
        <div className="my-8 flex flex-col items-center justify-center">
            <input className="px-4 py-2 rounded-md border-2 border-gray-700 mx-auto" onChange={(e)=>handleSearchChange(e)} value={search} placeholder="Search..."/>

<Suggestions users={filteredUsers} handleClick={handleClick} />

        </div>
    )
}