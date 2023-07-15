import { Analytics, Search } from '@mui/icons-material'
import React from 'react'
import Analyticscard from './Analyticscard'

const Dashboardtop = (params:any) => {
  return (
    <div className="dashboardtop">
      <div className="dashandsearch">
        <div className="dash">
          <h1>Dashboard</h1>
          <p>Hello, {params.name}, Welcome to Buzzboard</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <Search sx={{ fontSize: 40 }} />{" "}
          </button>
        </div>
      </div>
      <div className="analytics">
        <Analyticscard title="Total Posts" data="100" id='1'/>
        <Analyticscard title="Following" data="1234" id='2'/>
        <Analyticscard title="Followers" data="4312" id='3'/>
      </div>
    </div>
  );
}

export default Dashboardtop