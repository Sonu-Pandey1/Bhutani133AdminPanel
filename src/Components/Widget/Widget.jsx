
import "../Widget/Widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../../FirebaseConfig"

function Widget({ type }) {

    const [amount, setAmount] = useState(null)
    const [diff, setdiff] = useState(null)
    
    let data;
    switch (type) {
        case "user":
            data = {
                title: "Employees",
                query: "users",
                isMoney: false,
                link: "see all users",
                icon: <PersonOutlineOutlinedIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }} />
            };
            break;
        case "propertys":
            data = {
                title: "Properties",
                query:"propertys",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className="icon" style={{ color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)" }} />
            };
            break;
        case "blogs":
            data = {
                title: "Blogs",
                // isMoney: true,
                query:"blogs",
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon" style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }} />
            };
            break;
        case "requests":
            data = {
                title: "Queries",
                query: "querys",
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }} />
            };
            break;
        default:
            break;
    }

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))
         
            const lastMonthQuery = query(collection(db, data.query), where("timeStamp", "<=", today), where("timeStamp", ">=", lastMonth));

            const prevMonthQuery = query(collection(db, data.query), where("timeStamp", "<=", lastMonth), where("timeStamp", ">=", prevMonth));

            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)
            


            setAmount(lastMonthData.docs.length)
            setdiff((lastMonthData.docs.length - prevMonthData.docs.length) / (prevMonthData.docs.length) * 100)
            console.log(lastMonthData.docs.length)
            console.log(prevMonthData.docs.length)

        };
        fetchData()
    })

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link ">{data.link}</span>
            </div>
            <div className="right ">
                <div className={`percantage ${diff <= 0 ? "negative" : "positive"}`}>
                    {diff <= 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpOutlinedIcon />}
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
