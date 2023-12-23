// import { Route, Routes ,Navigate } from "react-router-dom"
// import "../src/App.scss"
// import "../src/Styles/Dark.scss"
// import Home from "./Pages/Home/Home"
// import List from "./Pages/List/List"
// import Login from "./Pages/Login/Login"
// import New from "./Pages/New/New"
// import Single from "./Pages/Single/Single"
// import { productInputs, userInputs } from "./formsource"
// import { useContext } from "react"
// import { DarkModeContext } from "./Context/darkModeContext"
// import {AuthContext} from "./Context/AuthContext"

// function App() {

//   const {darkMode} =useContext(DarkModeContext)
//   const {currentUser} =useContext(AuthContext)

//   const currentUser = false

//   const RequireAuth = ({children}) => {
//     return currentUser ? (children) : <Navigate to={"/login"}/>

//   }


//   return (
//   <div className={darkMode ? "app dark":"app"}>
//     <Routes>
//       <Route path="/" >
//         <Route path="login" element={<Login />} />
//         <Route index element={<RequireAuth><Home /></RequireAuth>} />
//         <Route path="users">
//           <Route index element={<RequireAuth><List /></RequireAuth>} />
//           <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
//           <Route path="new" element={<New inputs={userInputs} title={"Add New User"} />} />
//         </Route>
//         <Route path="products">
//           <Route index element={<List />} />
//           <Route path=":productId" element={<Single />} />
//           <Route path="new" element={<New inputs={productInputs} title={"Add New Product"} />} />
//         </Route>
//       </Route>
//     </Routes>
//   </div>
//   );
// }

// export default App



import { Route, Routes, Navigate } from "react-router-dom"
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
import { AuthContext } from "./Context/AuthContext"

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="users">
            <Route
              index
              element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }
            />
            <Route
              path=":userId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={userInputs} title="Add New User" />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }
            />
            <Route
              path=":productId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={productInputs} title="Add New Product" />
                </RequireAuth>
              }
            />
          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;