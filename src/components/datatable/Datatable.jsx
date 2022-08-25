import React, { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import { userColumns, productColumns } from "../../datatablesource";
import { Link } from "react-router-dom";

import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore";

import { db } from "../../firebase";

import "./Datatable.scss";

const Datatable = ({ type }) => {
  const [data, setData] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    if (type === "users") {
      const unsub = onSnapshot(
        collection(db, "users"),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setData(list);
        },
        (error) => {
          console.log(error);
        }
      );
      return () => {
        unsub();
      };
    } else {
      const unsub = onSnapshot(
        collection(db, "products"),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setDataProduct(list);
        },
        (error) => {
          console.log(error);
        }
      );
      return () => {
        unsub();
      };
    }

    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();
  }, [type]);

  const deleteHandler = async (id) => {
    if (type === "users") {
      try {
        await deleteDoc(doc(db, "users", id));
        setData((prev) => {
          return prev.filter((item) => {
            return item.id !== id;
          });
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await deleteDoc(doc(db, "products", id));
        setDataProduct((prev) => {
          return prev.filter((item) => {
            return item.id !== id;
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="cell_action">
            {type === "users" ? (
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <div className="view_button">View</div>
              </Link>
            ) : (
              <Link to="/products/test" style={{ textDecoration: "none" }}>
                <div className="view_button">View</div>
              </Link>
            )}
            <div
              className="delete_button"
              onClick={(e) => deleteHandler(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatable_title">
        {type === "users" ? "Add New User" : "Add New Product"}
        {type === "users" ? (
          <Link to="/users/new" className="link">
            Add New
          </Link>
        ) : (
          <Link to="/products/new" className="link">
            Add New
          </Link>
        )}
      </div>
      {type === "users" ? (
        <DataGrid
          className="data_grid"
          rows={data}
          productColumns
          columns={[...userColumns, ...actionColumn]}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      ) : (
        <DataGrid
          className="data_grid"
          rows={dataProduct}
          productColumns
          columns={[...productColumns, ...actionColumn]}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      )}
    </div>
  );
};

export default Datatable;
