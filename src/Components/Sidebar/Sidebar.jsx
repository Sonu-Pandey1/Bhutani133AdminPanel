import "../Sidebar/Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Sonu Pandey</span>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
          <p className="title">LISTS</p>
          <li><PermIdentityOutlinedIcon className="icon"/><span>Users</span></li>
          <li><ProductionQuantityLimitsOutlinedIcon className="icon"/><span>Products</span></li>
          <li><ReceiptLongOutlinedIcon className="icon"/><span>Orders</span></li>
          <li><LocalShippingOutlinedIcon className="icon"/><span>Delivary</span></li>
          <p className="title">USEFUL</p>
          <li><AddchartOutlinedIcon className="icon"/><span>Stats</span></li>
          <li><NotificationAddOutlinedIcon className="icon"/><span>Notifications</span></li>
          <p className="title">SERVICE</p>
          <li><SettingsSystemDaydreamOutlinedIcon className="icon"/><span>System Health</span></li>
          <li><PsychologyOutlinedIcon className="icon"/><span>Logs</span></li>
          <li><SettingsApplicationsOutlinedIcon className="icon"/><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className="icon"/><span>Profile</span></li>
          <li><ExitToAppOutlinedIcon className="icon"/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
