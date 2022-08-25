import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/listtable/ListTable";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months" />
        </div>
        <div className="list_container">
          <div className="list_title">Latest Transactions</div>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
