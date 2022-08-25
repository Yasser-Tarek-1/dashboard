export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.country}`}>
          {params.row.country}
        </div>
      );
    },
  },
];
export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "category",
    headerName: "Category",
    width: 230,
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 160,
  },
];
