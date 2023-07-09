import React, { useState } from 'react';
import './clienthistory.css'

import { DataGrid } from '@mui/x-data-grid';
import { historyColumns, historyRows } from './datatablesource';
import { Link } from "react-router-dom";

const ClientHistory = () => {
    const [data] = useState(historyRows);


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/clients/test/history" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            
          </div>
        );
      },
    },
  ];
  return (
    <>
    <div className='clienthistory'>

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

export default ClientHistory