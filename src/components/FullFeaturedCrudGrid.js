// import React, { useEffect, useState } from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// import { useSelector, useDispatch } from "react-redux";
// import { fetchUsersAsync } from "./usersSlice";
// import { Badge, IconButton, Typography } from "@mui/material";
// import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
// import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
// import DeleteIcon from "@mui/icons-material/Delete";

// const UsersList = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.data);
//   const status = useSelector((state) => state.users.status);
//   const totalCount = useSelector((state) => state.users.totalCount);
//   const totalPages = useSelector((state) => state.users.totalPages);
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);

//   const columns = [
//     {
//       field: "sno",
//       headerName: "S.No",
//       flex: 1,
//       sortable: false,
//       filterable: false,
//       // renderCell: (params) => {
//       //   console.log(params.row);
//       //   const rowIndex = params.row.index;
//       //   return <div>{(page - 1) * pageSize + rowIndex + 1}</div>;
//       // },
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       renderCell: (params) => {
//         return (
//           <div style={{ textTransform: "capitalize" }}>{params.row.name}</div>
//         );
//       },
//     },
//     { field: "email", headerName: "Email", flex: 1 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       sortable: false,
//       filterable: false,
//       renderCell: (params) => {
//         return (
//           <div>
//             <IconButton onClick={() => {}} color="info">
//               <EditNoteOutlinedIcon />
//             </IconButton>
//             <IconButton onClick={() => {}} color="error">
//               <DeleteIcon />
//             </IconButton>
//           </div>
//         );
//       },
//     },
//   ];

//   useEffect(() => {
//     dispatch(fetchUsersAsync({ page, pageSize }));
//     console.log(page);
//   }, [dispatch, page, pageSize]);

//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <Typography
//         variant="h6"
//         id="tableTitle"
//         component="div"
//         sx={{ display: "flex", alignItems: "center" }}
//       >
//         <GroupOutlinedIcon />
//         Users
//         <Badge badgeContent={totalCount} color="primary" sx={{ ml: 2 }}></Badge>
//       </Typography>
//       <DataGrid
//         rows={users}
//         columns={columns}
//         getRowId={(row) => row._id}
//         rowCount={totalCount}
//         editMode="row"
//         paginationMode="server"
//         components={{
//           Toolbar: GridToolbar,
//         }}
//         onPaginationModelChange={(params) => {
//           setPage(params.page + 1);
//           setPageSize(params.pageSize);
//         }}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: pageSize },
//           },
//         }}
//         pageSizeOptions={[5, 10, 20]}
//         // checkboxSelection
//         loading={status === "loading"}
//       />
//     </div>
//   );
// };

// export default UsersList;
