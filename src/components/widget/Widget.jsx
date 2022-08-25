import React, { useEffect, useState } from "react";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../../firebase";

import "./Widget.scss";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(0);
  const diff = 20;
  let data;

  switch (type) {
    case "user":
      data = {
        title: "User",
        isMony: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "#ff000024" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Order",
        isMony: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgb(218 165 32 / 19%)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Earning",
        isMony: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgb(0 128 0 / 19%)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMony: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "rgb(128 0 128 / 19%)" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));

      const lastMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);

      setAmount(lastMonthData.docs.length);
    };

    fetchData();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMony ? `$ ${amount}` : amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff > 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
