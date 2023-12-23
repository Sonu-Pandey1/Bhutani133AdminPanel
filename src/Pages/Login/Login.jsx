
import { useContext, useState } from "react"
import "../Login/Login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
// for create new user replace it only---> createUserWithEmailAndPassword 


function Login() {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handelLogin = (e) => {
    e.preventDefault();

    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      });
  }


  return (
    <div className="login">
      <form onSubmit={handelLogin} >
        <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span>Wrong Email or Password!</span>}
      </form>
    </div>
  )
}

export default Login


// import { useContext, useState } from "react";
// import "../Login/Login.scss"
// import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../../firebase";
// import { auth } from "../../FirebaseConfig"
// // import { useNavigate } from "react-router-dom";
// // import {AuthContext} from "../../context/AuthContext"

// const Login = () => {
//   const [error, setError] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   

  // 

//   const handleLogin = (e) => {
//     e.preventDefault();

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user)
        // 
//         // navitage("/")
//       })
//       .catch((error) => {
//         setError(true,error);
//       });
//   };

//   return (
//     <div className="login">
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         {error && <span>Wrong email or password!</span>}
//       </form>
//     </div>
//   );
// };

// export default Login;