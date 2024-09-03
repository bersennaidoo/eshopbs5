import React, { useState } from "react";
import { Link } from "react-router-dom";

import CIcon from "@coreui/icons-react";
import {
  cilCloudDownload,
  cilLayers,
  cilPuzzle,
  cilSpeedometer,
} from "@coreui/icons";

import {
  CBadge,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
  CNavGroup,
  CNavGroupItems,
  CNavItem,
  CNavLink,
  CNavTitle,
} from "@coreui/react";

const Header = () => {
  return (
    <CSidebar className="border-end">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>Register Now</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Quick Links</CNavTitle>
        <CNavGroup
          className="border rounded"
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Settings
            </>
          }
        >
          <CNavItem href="#">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>
            Login
          </CNavItem>
          <CNavItem href="#">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>
            Logout
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarHeader className="border-top">
        <CSidebarToggler />
      </CSidebarHeader>
    </CSidebar>
  );
};

export default Header;
