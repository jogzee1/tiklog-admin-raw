import React, { useState } from 'react';
import './clients.css'

import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link, NavLink } from "react-router-dom";




const Clients = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/clients/test" style={{ textDecoration: "none" }}>
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
     <section className='clients-section'>
        <div className='container'>
        <div className='top'>
           <h2>Clients</h2>
           <NavLink to='/clients/add-client'><button className='button'>Add Client</button> </NavLink>
        </div>

        <div className='client-list'>
        <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
        </div>
        </div>
     </section>
    </>
  )
}

export default Clients