import { Route, Routes } from "react-router-dom"
import "../src/App.scss"
import Home from "./Components/Home/Home"
import List from "./Components/List/List"
import Login from "./Components/Login/Login"
import New from "./Components/New/New"
import Single from "./Components/Single/Single"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/single" element={<Single/>}/>
      </Routes>
    </>
  )
}

export default App
