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
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
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
  
  

// add product page yourself and also create update data