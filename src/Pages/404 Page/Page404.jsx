import { useNavigate } from "react-router-dom"
import "../404 Page/Page404.scss"

function Page404() {
    const navigate = useNavigate()
  return (
    <div className="page404">
    <div className="Page404maindiv" data-aos="zoom-in-down">
        <div className="divdata " >
          <h1 className="">404 - Page Not Found <span><img className="mt-4" src="https://hs-marketing.imgix.net/images/pages/404/illustration-flourish.png?ixlib=gatsbyHook-2.1.1&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=100&h=30" alt="error" /></span></h1>


          <p className={"courseCardswhitenot"}>We looked all over, but that page seems to have gotten away  from us. Try one of these links to get back on track.</p>
        </div>

        <button className={`btn btn-outline-danger`} > <a href="https://www.bhutani133.com/" style={{textDecoration:"none"}}>Go To Website </a>  &gt; </button><br /><br/>
        <button  className={`btn btn-outline-warning `} onClick={() => { navigate("/") }}>Go To Dashboard &gt;</button>


      </div>

    </div>
  )
}

export default Page404


 

      
     
 