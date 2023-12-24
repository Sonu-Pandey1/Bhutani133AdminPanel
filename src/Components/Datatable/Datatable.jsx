import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../FirebaseConfig"



const Datatable = ({title}) => {
  const [data, setData] = useState([]);
  // console.log(title)


  useEffect(() => {
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
    return ()=>{
      unsub();
    }
  }, [title])
  console.log(data);  

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
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {`Add New ${title}`}
        {title === "propertys" ? <Link to="/products/new" className="link">Add New</Link>:<Link to="/users/new" className="link">Add New</Link>}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
