import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const List = () => {
    const [data, setData] = useState([]);

    // instance data render the Query form--->>

    // Get Realtime Data From Firebase.
    useEffect(() => {

        const unsub = onSnapshot(collection(db, "propertys"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach(doc => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list)
        }, (error) => {
            console.log(error)
        });

        return () => {
            unsub();
        }
    }, [])
    console.log(data);

    
    // const rows = [
    //     {
    //         id: 1143155,
    //         product: "Acer Nitro 5",
    //         img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    //         customer: "John Smith",
    //         date: "1 March",
    //         amount: 785,
    //         method: "Cash on Delivery",
    //         status: "Approved",
    //     },
    //     {
    //         id: 2235235,
    //         product: "Playstation 5",
    //         img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    //         customer: "Michael Doe",
    //         date: "1 March",
    //         amount: 900,
    //         method: "Online Payment",
    //         status: "Pending",
    //     },
    //     {
    //         id: 2342353,
    //         product: "Redragon S101",
    //         img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    //         customer: "John Smith",
    //         date: "1 March",
    //         amount: 35,
    //         method: "Cash on Delivery",
    //         status: "Pending",
    //     },
    //     {
    //         id: 2357741,
    //         product: "Razer Blade 15",
    //         img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    //         customer: "Jane Smith",
    //         date: "1 March",
    //         amount: 920,
    //         method: "Online",
    //         status: "Approved",
    //     },
    //     {
    //         id: 2342355,
    //         product: "ASUS ROG Strix",
    //         img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    //         customer: "Harold Carol",
    //         date: "1 March",
    //         amount: 2000,
    //         method: "Online",
    //         status: "Pending",
    //     },
    // ];
    return (
        <TableContainer component={Paper} className="table">
            <Table className="subtable" sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Property</TableCell>
                        <TableCell className="tableCell">Name</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Budget</TableCell>
                        <TableCell className="tableCell">Condition</TableCell>
                        <TableCell className="tableCell">Stock</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.builder}</TableCell>
                            <TableCell className="tableCell">{row.listingdate}</TableCell>
                            <TableCell className="tableCell">{row.price}</TableCell>
                            <TableCell className="tableCell">{row.condition}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.stock}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;