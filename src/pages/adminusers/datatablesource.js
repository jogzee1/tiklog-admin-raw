export const adminUserColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "client",
      headerName: "Client",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {/*{params.row.firstname}*/}

            {params.row.firstName || ''} {params.row.lastName || ''}

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
      field: "role",
      headerName: "Role",
      width: 160,
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
  
  //temporary data
  export const adminUserRows = [
    {
      id: 1,
      firstName: "Jon",
      lastName: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      status: "active",
      email: "1snow@gmail.com",
      role: "regular",
    },
    {
      id: 2,
      firstname: "Jon",
      lastname: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      email: "2snow@gmail.com",
      status: "passive",
      role: "manager",
    },
    {
      id: 3,
      firstname: "Jon",
      lastname: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      email: "3snow@gmail.com",
      status: "pending",
      role: "super-admin",
    },
    {
      id: 4,
      firstname: "Jon",
      lastname: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      email: "4snow@gmail.com",
      status: "active",
      role: "Supervisor",
    },
    {
      id: 5,
      firstname: "Jon",
      lastname: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      email: "5snow@gmail.com",
      status: "passive",
      role: "customer-care",
    },
    {
      id: 6,
      firstname: "Jon",
      lastname: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      email: "6snow@gmail.com",
      status: "active",
      role: "Admin",
    },
    {
      id: 7,
      firstname: "Jon",
      lastname: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      email: "7snow@gmail.com",
      status: "passive",
      role: "Manager",
    },
    {
      id: 8,
      firstname: "Jon",
      lastname: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      email: "8snow@gmail.com",
      status: "active",
      role: "Admin",
    },
    {
      id: 9,
      firstname: "Jon",
      lastname: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      email: "snow@gmail.com",
      status: "pending",
      role: "supervisor",
    },
    {
      id: 10,
      firstname: "Jon",
      lastname: "Snow",
      img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
      email: "snow@gmail.com",
      status: "active",
      role: "Manager",
    },
  ];