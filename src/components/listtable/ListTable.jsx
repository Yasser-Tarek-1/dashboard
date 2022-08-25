import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./ListTable.scss";

const ListTable = () => {
  const rows = [
    {
      id: 1234891,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/61FRE6ePcnL._AC_SY450_.jpg",
      customer: "Rice",
      date: "5 Mar",
      amount: 785,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 1231571,
      product: "PS 5",
      img: "https://m.media-amazon.com/images/I/51051FiD9UL._SX522_.jpg",
      customer: "Rodrigo",
      date: "3 Mar",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 1724891,
      product: "Samsung S22 Ultra",
      img: "https://m.media-amazon.com/images/I/817aOXLoNpL._AC_SX679_.jpg",
      customer: "Smith",
      date: "3 Mar",
      amount: 1015,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 1120891,
      product: "MacBook Pro",
      img: "https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_SX342_.jpg",
      customer: "Saka",
      date: "1 Mar",
      amount: 2055,
      method: "Online Payment",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table_cell">Tracking ID</TableCell>
            <TableCell className="table_cell">Product</TableCell>
            <TableCell className="table_cell">Customer</TableCell>
            <TableCell className="table_cell">Date</TableCell>
            <TableCell className="table_cell">Amount</TableCell>
            <TableCell className="table_cell">Payment Method</TableCell>
            <TableCell className="table_cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="table_cell">{row.id}</TableCell>
              <TableCell className="table_cell">
                <div className="wripper">
                  <img src={row.img} alt="product" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="table_cell">{row.customer}</TableCell>
              <TableCell className="table_cell">{row.date}</TableCell>
              <TableCell className="table_cell">{row.amount}</TableCell>
              <TableCell className="table_cell">{row.method}</TableCell>
              <TableCell className="table_cell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
