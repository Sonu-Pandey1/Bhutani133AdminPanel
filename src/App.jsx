import { Route, Routes } from "react-router-dom"
import "../src/App.scss"
import Home from "./Pages/Home/Home"
import List from "./Pages/List/List"
import Login from "./Pages/Login/Login"
import New from "./Pages/New/New"
import Single from "./Pages/Single/Single"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
