/* eslint-disable react/prop-types */
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns , productColumns, querysColumns, blogsColumns} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../FirebaseConfig"


const Datatable = ({ title }) => {
  const [data, setData] = useState([]);

      // Get Realtime Data From Firebase.
  useEffect(() => {
    // get data from firebase
    // const fetchData = async () => {
    //   let list = []
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() })
    //     });
    //     setData(list)
    //     console.log(list)
    //   } catch (error) {
    //     console.log(error.message)
    //   }
    // }
    // fetchData()

    // listen (realTime)

    const unsub = onSnapshot(collection(db, title), (snapShot) => {
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
  }, [title])
  console.log(data);

    // Handle Delete-----
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, title, id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error.message)
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${title}/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];
  
console.log(title)

  return (
    <div className="datatable">

      <div className="datatableTitle">
        {`Add New ${title}`}
        <Link to={`/${title}/new`} className="link">Add New</Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={ title === "users" ? userColumns.concat(actionColumn) : title === "propertys" ? productColumns.concat(actionColumn): title === "querys" ? querysColumns.concat(actionColumn):blogsColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
{/* {title === "users" ? userColumns.concat(actionColumn):productColumns.concat(actionColumn)} */}
    </div>
  );
};

export default Datatable;
