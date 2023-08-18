
import   {Link, useNavigate}  from "react-router-dom"
const Friends = (props) => { 
  
    const {name , username , id } = props.friend;
 
    const navigate = useNavigate()

    const showFriendsDetails = () => {
        const  path = `/friend/${id}`;
        navigate(path)

    }
  return (
    <div>
  
  <h2>Name: {name}</h2>
    <Link to={'/friend/' + id } > show detail </Link>
    <button onClick={showFriendsDetails} >{username} : {id}</button>

    </div>
  )
}

export default Friends