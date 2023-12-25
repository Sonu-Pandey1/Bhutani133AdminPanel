import "../Sidebar/Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

function Sidebar() {

  const {dispatch} =useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">Sonu Pandey</span>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <NavLink to={"/users"} style={{ textDecoration: "none" }}>
            <li>
              <PermIdentityOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </NavLink>

          <NavLink to={"/propertys"} style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icon" />
              <span>Propertys</span>
            </li>
          </NavLink>

          <NavLink to={"/orders"} style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <ReceiptLongOutlinedIcon className="icon" />
              <span>Orders</span>
            </li>
          </NavLink>

          <NavLink to={"/delivary"} style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <LocalShippingOutlinedIcon className="icon" />
              <span>Delivary</span>
            </li>
          </NavLink>

          <p className="title">USEFUL</p>
          <li>
            <AddchartOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationAddOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
    </div>
  );
}

export default Sidebar;
