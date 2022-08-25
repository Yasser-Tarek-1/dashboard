import React from "react";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/listtable/ListTable";

import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single_container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                alt=""
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="itemImg"
              />
              <div className="details">
                <h1 className="item_title">Smith Row</h1>
                <div className="detail_item">
                  <span className="item_key">Emial:</span>
                  <span className="item_value">smithrow3@gamil.com</span>
                </div>
                <div className="detail_item">
                  <span className="item_key">Phone:</span>
                  <span className="item_value">+1 1246 123 1234</span>
                </div>
                <div className="detail_item">
                  <span className="item_key">Address:</span>
                  <span className="item_value">Elton St. 112 Tokyo</span>
                </div>
                <div className="detail_item">
                  <span className="item_key">Contry:</span>
                  <span className="item_value">Japanese</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>

          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
