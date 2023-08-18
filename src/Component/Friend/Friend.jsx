import { useEffect, useState } from "react"
import Friends from "../Friends/Friends"


const Friend = () => {
    const [friends, setFriends]=useState([])
    useEffect ( () =>{
        fetch(' https://jsonplaceholder.typicode.com/users') 
        .then(res => res.json())
        .then(data => setFriends(data))  
    } , [] )
  return (
    <div>
        
        <p>amra bondhu </p>
        <p>apatoto kicu tk dar dis... { friends.length }   </p>

         {
            friends.map(friend => <Friends key={friend.key} friend={friend} ></Friends>)
         }   
           
        </div>
  )
}

export default Friend