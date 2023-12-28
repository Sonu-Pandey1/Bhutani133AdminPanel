export const userColumns = [
  {
    field: "user",
    headerName: "Profile",
    width: 80,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "displayName",
    headerName: "Name",
    width: 130,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 140,
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "address",
    width: 190,
  },
];


export const productColumns = [

  {
    field: "product",
    headerName: "SiteImg",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "builder",
    headerName: "Builder",
    width: 90,
  },
  {
    field: "title",
    headerName: "Title",
    width: 140,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "size",
    headerName: "Size",
    width: 80,
  },
  {
    field: "condition",
    headerName: "Condition",
    width: 100,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
  },
  {
    field: "listingdate",
    headerName: "Listing Date",
    width: 100,
  },
];

export const querysColumns = [

  {
    field: "img",
    headerName: "Img",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img ? params.row.img:"https://assets-v2.lottiefiles.com/a/a4f971f6-1170-11ee-bd46-334fd5c2f53c/JB1z4UykFG.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "budget",
    headerName: "Budget",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "for",
    headerName: "For",
    width: 70,
  },
  {
    field: "size",
    headerName: "Size",
    width: 80,
  },
  {
    field: "queryDate",
    headerName: "QueryDate",
    width: 110,
  },
];

export const blogsColumns = [

  {
    field: "img",
    headerName: "Img",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
  },
  // {
  //   field: 'route',
  //   headerName: 'Route',
  //   width: 140,
  // },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "listingdate",
    headerName: "Publish Date",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];



// add product page yourself and also create update data