import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo_official.png";
import {
  AiFillHome,
  AiFillBook,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav class="navbar">
    <a href="" class="brand">Matheus.</a>
    <ul>
      <li class="active nav-item">HOME</li>
      <li class="nav-item">ABOUT</li>
      <li class="nav-item">TECHNOLOGIES</li>
      <li class="nav-item">PROJECTS</li>
      <li class="nav-item">LINKEDIN</li>
      <li class="nav-item">GITHUB</li>
    </ul>
  </nav>
  );
};

export default Navbar;
