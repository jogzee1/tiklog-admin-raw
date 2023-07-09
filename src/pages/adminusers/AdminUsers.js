import React from 'react'
import './adminusers.css'

import { DataGrid } from '@mui/x-data-grid';
//import { adminUserColumns, adminUserRows } from './datatablesource';
import { Link, NavLink } from "react-router-dom";
//import { useState } from 'react';

const name = 'bola';

 const adminUserColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "client",
    headerName: "Client",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {/*{params.row.firstName}*/}

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

const adminUserRows = [
  {
    id: 1,
    firstName: name,
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    status: "active",
    email: "1snow@gmail.com",
    role: "regular",
  },
  {
    id: 2,
    firstName: "Jon",
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    email: "2snow@gmail.com",
    status: "passive",
    role: "manager",
  },
  {
    id: 3,
    firstName: "Jon",
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    email: "3snow@gmail.com",
    status: "pending",
    role: "super-admin",
  },
  {
    id: 4,
    firstName: "Jon",
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    email: "4snow@gmail.com",
    status: "active",
    role: "Supervisor",
  },
  {
    id: 5,
    firstName: "Jon",
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    email: "5snow@gmail.com",
    status: "passive",
    role: "customer-care",
  },
  {
    id: 6,
    firstName: "Jon",
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    email: "6snow@gmail.com",
    status: "active",
    role: "Admin",
  },
  {
    id: 7,
    firstName: "Jon",
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    email: "7snow@gmail.com",
    status: "passive",
    role: "Manager",
  },
  {
    id: 8,
    firstName: "Jon",
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    email: "8snow@gmail.com",
    status: "active",
    role: "Admin",
  },
  {
    id: 9,
    firstName: "Jon",
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    email: "snow@gmail.com",
    status: "pending",
    role: "supervisor",
  },
  {
    id: 10,
    firstName: "Jon",
    lastName: "Snow",
    img: "https://snworksceo.imgix.net/dpn/8e87d6c6-6bc7-4327-bc12-43704f80d2d3.sized-1000x1000.jpg?w=1000",
    email: "snow@gmail.com",
    status: "active",
    role: "Manager",
  },
];


const AdminUsers = () => {

    //const [data, setData] = useState(adminUserRows);

  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin-users/test" style={{ textDecoration: "none" }}>
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
    <>
     <section className='adminusers-section'>
        <div className='container'>
        <div className='top'>
           <h2>Admins</h2>
           <NavLink to='/admin-users/new'><button className='button'>Add New Admin</button> </NavLink>
        </div>

        <div className='client-list'>
        <DataGrid
        className="datagrid"
        rows={adminUserRows}
        columns={adminUserColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        //getRowId={_id}
      />
        </div>
        </div>
     </section>
    </>
  )
}

export default AdminUsers