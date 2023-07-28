import React from "react";
import { Container } from "@mui/material";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";

const NavbarLayout = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="80%">
        <Outlet />
      </Container>
    </div>
  );
};

export default NavbarLayout;
