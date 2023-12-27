import "../Home/Home.scss"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";

function Home() {
    return (
        <div className="home">
            <Sidebar />

            <div className="homeContainer" type="">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="propertys" />
                    <Widget type="blogs" />
                    {/* <Widget type="product" /> */}
                    <Widget type="requests" />
                   
                    
                    
                </div>

                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title=" Last 6 Months ( Revenue)"/>
                </div>

                <div className="listContainer">
                    <div className="listTitle mb-3">Latest Properties</div>
                    <Table/>
                </div>
            </div>

        </div>
    )
}

export default Home;
