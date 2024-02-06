import { useState } from "react";
import UserContext from "../context/UserContext";
import Users from "./Users";

function UserDashboard() {   
    const [user, setUser] = useState("John");

    const users = {
        userName: user,
        setUser
    }

    return (
        <>
            <UserContext.Provider value={users}>
                <h2>UserDashboard</h2>
                <Users />
            </UserContext.Provider>
            
        </>
    );
}

export default UserDashboard;
