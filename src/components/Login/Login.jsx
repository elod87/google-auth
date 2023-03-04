import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appLogin } from "../../auth";
import sharedClasses from "../shared.module.scss";
import classes from "./Login.module.scss";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    appLogin({
                        token: user.access_token,
                        userData: data,
                    });
                    navigate("/profile");
                })
                .catch((err) => console.log(err));
        }
    }, [user, navigate]);

    const login = useGoogleLogin({
        onSuccess: (response) => {
            setUser(response);
        },
        onError: (error) => console.log("Login Failed:", error),
    });

    return (
        <div className={sharedClasses.mainCointainer}>
            <div className={sharedClasses.container}>
                <div>
                    <span className={sharedClasses.title}>Login</span>
                </div>
                <button className={classes.googleButton} onClick={() => login()}>
                    <div></div>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}
