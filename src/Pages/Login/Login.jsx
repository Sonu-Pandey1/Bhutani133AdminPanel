
import { useContext, useState } from "react"
import "../Login/Login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
// // for create new user replace it only---> createUserWithEmailAndPassword 


function Login() {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navitage = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handelLogin = (e) => {
    e.preventDefault();

    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user
        dispatch({ type: "LOGIN", payload: user })
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(user.accessToken));
        // console.log(user)
        navitage("/")
      })
      .catch((error) => {
        setError(true)
        console.log(error.message)
      });
  }


  return (
    //     <div className="login">
    //       <form onSubmit={handelLogin} >
    //         <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
    //         <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
    //         <button type="submit">Login</button>
    //         {error && <span>Wrong Email or Password!</span>}
    //       </form>
    //     </div>

    <div className="">
      <div className="container d-flex justify-content-between">
        <div className="row">
          <div className="col ram" data-aos="zoom-in-up">
            <img className="loginIconImage mt-5 pt-5" src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="" />
          </div>
        </div>
        <div className="col ramm" data-aos="zoom-in-up">
          <div className="loginWrapper">
            <form onSubmit={handelLogin} action="" className={`form_main  `}>
              <p className="heading">Login</p>
              <div className="inputContainer ">
                <svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                </svg>
                <input type="email" className="inputField" id="username" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="inputContainer">
                <svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </svg>
                <input type="password" className="inputField" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </div>


              <button id="button">Submit</button>
              <a className="forgotLink" href="#">{error && <span style={{color:"red"}}>Wrong Email or Password!</span>}</a>
            </form>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Login;




