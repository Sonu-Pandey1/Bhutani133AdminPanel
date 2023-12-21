import "../Home/Home.scss"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";

function Home() {
    return (
        <div className="home">
            <Sidebar />
            
            <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget/>
            </div>
            </div>

        </div>
    )
}

export default Home;
