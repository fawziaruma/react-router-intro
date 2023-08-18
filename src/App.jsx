
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Friend from './Component/Friend/Friend'
import NotFound from './Component/NotFound/NotFound'
import Header from './Component/Header/Header'
import FriendDetail from './Component/FriendDetail/FriendDetail'


function App() {
 

  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/friend' element={<Friend></Friend>} ></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>} ></Route>
        <Route path='/about' element= {<About></About> } > </Route>
        <Route path="*"  element={<NotFound></NotFound> } ></Route>
      </Routes>
    </>
  )
}

export default App
