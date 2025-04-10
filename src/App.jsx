import { BrowserRouter,Routes,Route } from "react-router-dom";
import Body from "./Body"
import Profile from "./Profile"
import Login from "./Login"
function App() {
  

  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
    <Route path="/" element={<Body />} >
    <Route path="/Login" element={<Login />}></Route> 
    <Route path="/Profile" element={<Profile />}></Route>   
    </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
