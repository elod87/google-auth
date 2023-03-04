import { googleLogout } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";
import { appLogout, getUserData } from "../../auth";
import sharedClasses from "../shared.module.scss";
import classes from "./Profile.module.scss";

export default function Profile() {
    const navigate = useNavigate();

    const profile = getUserData();

    const handleLogout = () => {
        googleLogout();
        appLogout();
        navigate("/");
    };

    return (
        <div className={sharedClasses.mainCointainer}>
            <div className={`${sharedClasses.container} ${classes.gap10}`}>
                <span className={sharedClasses.title}>Profile info</span>
                <img src={profile.picture} alt="profile" />
                <div>{profile.name}</div>
                <div>{profile.email}</div>
                <button className={classes.logoutButton} onClick={handleLogout}>
                    Log out
                </button>
            </div>
        </div>
    );
}
