import { useNavigate } from "react-router-dom";
import { mockAPI } from "../service/MockData"
import { use } from "react";
import { useAuth } from "../context/AuthContext";

export const Dashboard = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleClick = () => {
        const res = logout();
        if (res.success) {
            navigate('/login')
        }
    }

    return (
        <>
            <h1>Hello from Dashboard</h1>
            <button onClick={handleClick}>Logout</button>
        </>

    )
}