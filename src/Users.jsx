import { useEffect, useState, } from "react"
import Friend from "./user";

export default function Users(){

const [users,setUsers] = useState([]);
useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
}, [])

    return (
        <div>
            <h3>users: {users.length}</h3>
            {
                users.map(user=> <Friend friend={user}></Friend>)
            }
        </div>
        
    )
}