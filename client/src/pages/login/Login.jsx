import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./Login.scss";
import newRequest from "../../utils/newRequest";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const res = await axios.post(
            //     "http://localhost:8800/api/auth/login",
            //     {
            //         username,
            //         password,
            //     },
            //     {
            //         withCredentials: true,
            //     }
            // );
            const res = await newRequest.post(
              "/auth/login", {
                username,
                password,
            });
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/");
            // console.log(res.data);
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                {/* <label htmlFor="">Username</label> */}
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* <label htmlFor="">Password</label> */}
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && error} {/*if error show it */}
            </form>
        </div>
    );
}

export default Login;
