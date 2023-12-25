/* eslint-disable react/prop-types */

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

  // for Dark Mode ---
  const { darkMode } = useContext(DarkModeContext);
  // For Login --- if User Not Login Then he Redirect to Login
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route index element={<RequireAuth><Home /></RequireAuth>} />

          <Route path="users">
            <Route index element={<RequireAuth><List titles={"users"} /></RequireAuth>} />
            <Route path=":userId" element={<RequireAuth><Single inputs={userInputs} titles="users" /></RequireAuth>} />
            <Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add New User" titles="users" /></RequireAuth>} />
          </Route>

          <Route path="propertys">
            <Route index element={<RequireAuth><List titles={"propertys"} /></RequireAuth>} />
            <Route path=":userId" element={<RequireAuth><Single inputs={productInputs} titles="propertys" />
            </RequireAuth>} />
            <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add New propertys" titles="propertys" /></RequireAuth>} />
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;