import "../Home/Home.scss"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";

function Home() {
    return (
        <div className="home">
            <Sidebar />

            <div className="homeContainer" type="">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>

                <div className="charts">

                </div>
            </div>

        </div>
    )
}

export default Home;
