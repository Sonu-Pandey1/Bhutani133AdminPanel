/* eslint-disable react/prop-types */
import "../List/List.scss"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import Datatable from "../../Components/Datatable/Datatable";

function List({ titles }) {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable title={titles}/>
      </div>
    </div>
  )
}

export default List;
