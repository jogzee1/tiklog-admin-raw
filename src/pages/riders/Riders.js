import React, { useState } from 'react'
import './riders.css'

import { DataGrid } from '@mui/x-data-grid';
import { riderColumns, riderRows } from './datatablesource';
import { Link, NavLink } from "react-router-dom";

const Riders = () => {
    const [data, setData] = useState(riderRows);

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
            <Link to="/riders/test" style={{ textDecoration: "none" }}>
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
     <section className='riders-section'>
        <div className='container'>
        <div className='top'>
           <h2>Clients</h2>
           <NavLink to='/riders/new-rider'><button className='button'>Add Rider</button> </NavLink>
        </div>

        <div className='clients-list'>
        <DataGrid
        className="datagrid"
        rows={data}
        columns={riderColumns.concat(actionColumn)}
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

export default Riders