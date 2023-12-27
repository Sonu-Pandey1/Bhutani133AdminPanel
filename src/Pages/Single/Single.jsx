import "./single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
// import Chart from "../../Components/Chart/Chart";
// import List from "../../Components/Table/Table";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PublishIcon from '@mui/icons-material/Publish';
import CategoryIcon from '@mui/icons-material/Category';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import { useEffect, useState } from "react";
import { PermIdentity, Publish } from "@mui/icons-material";
// import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";


const Single = ({ titles }) => {
  const [items, setItems] = useState({})
  const [data, setData] = useState([])
  const { userId } = useParams();
  console.log(userId)

  useEffect(() => {

    const unsub = onSnapshot(collection(db, titles), (snapShot) => {
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

  useEffect(() => {
    {
      data.map((item) => {
        if (item.id === userId) {
          // console.log(item)
          setItems(item)
          console.log(items)
        }

      })
    }
  }, [data, userId, items])

  // if you want to edit functionility then use new component 


  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {/* user form */}
        {titles === "users" ? <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle"> User Information</h1>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src={`${items.img ? items.img : "https://assets-v2.lottiefiles.com/a/a4f971f6-1170-11ee-bd46-334fd5c2f53c/JB1z4UykFG.gif"}`}
                  alt="img"
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{items.displayName}</span>
                  <span className="userShowUserTitle">{items.designation}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">User Details</span>
                <div className="userShowInfo">
                  <PermIdentityIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.displayName}</span>
                </div>
                <div className="userShowInfo">
                  <CalendarTodayIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.doj}</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroidIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">+91 {items.phone}</span>
                </div>
                <div className="userShowInfo">
                  <MailOutlineIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.email}</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearchingIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.address} , {items.country}</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit info..(Coming Soon..)</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  {/* <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div> */}
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Sonu Pandey"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Posc87@gmail.com"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="+91 8766325423"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Mathura | Up"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>D.O.J</label>
                    <input
                      type="text"
                      placeholder="27/11/2023"
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/edc3ab78364175.5ca3009cb66a0.gif"
                      alt="img"
                    />
                    <label htmlFor="file">
                      <PublishIcon className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div> : titles === "propertys" ? <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle"> Property Information</h1>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src={`${items.img ? items.img : "https://assets-v2.lottiefiles.com/a/a4f971f6-1170-11ee-bd46-334fd5c2f53c/JB1z4UykFG.gif"}`}
                  alt="img"
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{items.builder}</span>
                  <span className="userShowUserTitle">{items.title}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Propertys Details</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.id}</span>
                </div>
                <div className="userShowInfo">
                  <CategoryIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.category}</span>
                </div>
                <div className="userShowInfo">
                  <MonetizationOnOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.price}</span>
                </div>
                <div className="userShowInfo">
                  <HomeOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.size}</span>
                </div>
                <div className="userShowInfo">
                  <BedOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.condition}</span>
                </div>
                <div className="userShowInfo">
                  <InventoryOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.stock}</span>
                </div>
                <div className="userShowInfo">
                  <DescriptionOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.description}</span>
                </div>
                <div className="userShowInfo">
                  <CalendarMonthOutlinedIcon className="userShowIcon " />
                  <span className="userShowInfoTitle">{items.listingdate}</span>
                </div>

              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit info..(Coming Soon..)</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Builder</label>
                    <input
                      type="text"
                      placeholder="Bhutani"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="Avenue 133"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Category</label>
                    <input
                      type="text"
                      placeholder=" Residential ,Commericial ,Sco etc"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Price</label>
                    <input
                      type="text"
                      placeholder=" 2000000"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Stock</label>
                    <input
                      type="text"
                      placeholder="Yes"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Size</label>
                    <input
                      type="text"
                      placeholder="2BHK ,3BHK ,4BHK ,etc"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Condition</label>
                    <input
                      type="text"
                      placeholder="Row ,Furnished ,Semi-f ,etc"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>ListingDate</label>
                    <input
                      type="text"
                      placeholder=" 27/11/2023"
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/edc3ab78364175.5ca3009cb66a0.gif"
                      alt="img"
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div> : titles === "querys" ? <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle"> Query Information</h1>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src={`${items.img ? items.img : "https://assets-v2.lottiefiles.com/a/a4f971f6-1170-11ee-bd46-334fd5c2f53c/JB1z4UykFG.gif"}`}
                  alt="img"
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{items.name}</span>
                  <span className="userShowUserTitle">{items.city}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Query Details</span>
                <div className="userShowInfo">
                  <MarkEmailReadOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.email}</span>
                </div>
                <div className="userShowInfo">
                  <InventoryOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.phone}</span>
                </div>
                <div className="userShowInfo">
                  <MonetizationOnOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.budget}</span>
                </div>
                <div className="userShowInfo">
                  <HomeOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.for}</span>
                </div>
                <div className="userShowInfo">
                  <BedOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.size}</span>
                </div>
                <div className="userShowInfo">
                  <DescriptionOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.id}</span>
                </div>
                <div className="userShowInfo">
                  <CalendarMonthOutlinedIcon className="userShowIcon " />
                  <span className="userShowInfoTitle">{items.queryDate}</span>
                </div>

              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit info..(Coming Soon..)</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>City</label>
                    <input
                      type="text"
                      placeholder="In which city you are intrested ?"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Budget</label>
                    <input
                      type="text"
                      placeholder="200000"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>For</label>
                    <input
                      type="text"
                      placeholder="Rent, Buy, Resale"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Size</label>
                    <input
                      type="text"
                      placeholder="2BHK ,3BHK ,4BHK ,etc"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Query Date</label>
                    <input
                      type="text"
                      placeholder=" 27/11/2023"
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/edc3ab78364175.5ca3009cb66a0.gif"
                      alt="img"
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div> : <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle"> Blog Information</h1>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src={`${items.img ? items.img : "https://assets-v2.lottiefiles.com/a/a4f971f6-1170-11ee-bd46-334fd5c2f53c/JB1z4UykFG.gif"}`}
                  alt="img"
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{items.builder}</span>
                  <span className="userShowUserTitle">{items.id}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Blog Details</span>
                <div className="userShowInfo">
                  <CategoryIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.title}</span>
                </div>

                <div className="userShowInfo">
                  <InventoryOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.about}</span>
                </div>

                <div className="userShowInfo">
                  <DescriptionOutlinedIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{items.status}</span>
                </div>

                <div className="userShowInfo">
                  <CalendarMonthOutlinedIcon className="userShowIcon " />
                  <span className="userShowInfoTitle">{items.publishdate}</span>
                </div>

              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit info..(Coming Soon..)</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="userUpdateInput"
                    />
                  </div>

                  <div className="userUpdateItem">
                    <label>Description</label>
                    <input
                      type="text"
                      placeholder="Description"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Status</label>
                    <input
                      type="text"
                      placeholder="Active, Panding etc"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>ListingDate</label>
                    <input
                      type="text"
                      placeholder=" 27/11/2023"
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/edc3ab78364175.5ca3009cb66a0.gif"
                      alt="img"
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>}






        {/* <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>

            <div className="item">
              <img
                src={`${items.img}`}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{items.displayName}</h1>
                <p className="text-center">Designation</p>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{items.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{items.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  {items.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{items.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div> */}
        {/* <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div> */}
      </div>
    </div>


  );
};

export default Single;
