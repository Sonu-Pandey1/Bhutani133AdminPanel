import { Route, Routes } from "react-router-dom"
import "../src/App.scss"
import "../src/Styles/Dark.scss"
import Home from "./Pages/Home/Home"
import List from "./Pages/List/List"
import Login from "./Pages/Login/Login"
import New from "./Pages/New/New"
import Single from "./Pages/Single/Single"
import { productInputs, userInputs } from "./formsource"
import { useContext } from "react"
import { DarkModeContext } from "./Context/darkModeContext"

function App() {

  const {darkMode} =useContext(DarkModeContext)

  return (
  <div className={darkMode ? "app dark":"app"}>
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New inputs={userInputs} title={"Add New User"} />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs={productInputs} title={"Add New Product"} />} />
        </Route>
      </Route>
    </Routes>
  </div>
  );
}

export default App
