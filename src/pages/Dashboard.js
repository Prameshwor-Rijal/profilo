import { useNavigate } from "react-router-dom";
import { mockAPI } from "../service/MockData"

export const Dashboard = () => {

    const navigate = useNavigate();

    const handleClick = ()=>{
        mockAPI.logout();
        navigate('/login')
    }

    return (
        <>
            <h1>Hello from Dashboard</h1>
            <button onClick={handleClick}>Logout</button>
        </>

    )
}