import React, { useContext } from "react";
import AdminProvider, { adminContext } from "./AdminContext";
import ListProduct from "./views/ListProduct";

const Admin = () => {
  return (
    <AdminProvider>
      <ListProduct />
    </AdminProvider>
  );
};

export default Admin;
