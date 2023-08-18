
import CustomLink from "../CustomLink/CustomLink"
import "./Header.css"


const Header = () => {
  return (
    <div>
        <h1>Welcome to my Website</h1>
        <nav>
            <CustomLink to="/"  className="nav-bar" > Home </CustomLink>
           <CustomLink to="/friend" className="nav-bar" >Friend</CustomLink>
           <CustomLink to="/about" className="nav-bar" > About </CustomLink>
        </nav>
    </div>
  )
}

export default Header