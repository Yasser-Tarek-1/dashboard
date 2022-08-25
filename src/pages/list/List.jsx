import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

import "./List.scss";

const List = ({ type }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list_container">
        <Navbar />
        <Datatable type={type}/>
      </div>
    </div>
  );
};

export default List;
