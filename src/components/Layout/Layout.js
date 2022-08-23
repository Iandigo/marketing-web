import React from 'react'
import {Outlet} from "react-router-dom"
import classes from "./Layout.module.css"
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className={classes.body}>
        <Outlet />
        <Link to="/contact" className={classes.btn}>
        Contact Us
        </Link>
    </div>
  )
}

export default Layout