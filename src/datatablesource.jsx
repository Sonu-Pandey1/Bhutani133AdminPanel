export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
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
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "address",
      headerName: "address",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];


// export const productColumns = [
//     { field: "id", headerName: "ID", width: 70 },
//     {
//       field: "product",
//       headerName: "product",
//       width: 230,
//       renderCell: (params) => {
//         return (
//           <div className="cellWithImg">
//             <img className="cellImg" src={params.row.img} alt="avatar" />
//             {params.row.username}
//           </div>
//         );
//       },
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       width: 230,
//     },
  
//     {
//       field: "address",
//       headerName: "address",
//       width: 100,
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 160,
//       renderCell: (params) => {
//         return (
//           <div className={`cellWithStatus ${params.row.status}`}>
//             {params.row.status}
//           </div>
//         );
//       },
//     },
//   ];
  
  

// add product page yourself and also create update data