import React, { useState } from "react";
import { Button, Select, Logo, Input } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../store/authSlice";
import authService from "../appwrite/auth";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("")
  return <div></div>;
}

export default Signup;
