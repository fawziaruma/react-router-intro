import { useEffect, useState } from "react"
import { useParams } from "react-router"


const FriendDetail = () => {
    const {friendId} = useParams()
    const  [friend , setFriend] = useState({})
    useEffect( () => {
        const url  =  `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    } , [] )
  return (
    <div>
        <h2>This  is Details about Dosto :{friendId}</h2>
        <h3>Name :  {friend.name}</h3>
        <h4>Email: {friend.email}</h4>
        <h5>website:{friend.website}</h5>
        <p>city:{friend.address?.city}</p>
    </div>
  )
}

export default FriendDetail