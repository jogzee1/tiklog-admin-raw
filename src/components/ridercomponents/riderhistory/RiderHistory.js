import React from 'react'
import './riderhistory.css'

import { DataGrid } from '@mui/x-data-grid';
import { historyColumns, historyRows } from './datatablesource';
import { Link } from "react-router-dom";
import { useState } from 'react';

const RiderHistory = () => {

    const [data] = useState(historyRows);
  
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to="/riders/test/history" style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              
            </div>
          );
        },
      },
    ];

  return (
    <>
    <div className='riderhistory'>

     <div className='history-list'>
     <DataGrid
        className="datagrid"
        rows={data}
        columns={historyColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
     </div>
     </div>
    </>
  )
}

export default RiderHistory