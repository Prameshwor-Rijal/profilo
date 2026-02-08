import { Navigate } from "react-router-dom";
import { mockAPI } from "../../service/MockData"


export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = mockAPI.isValidToken();
    return isAuthenticated ? children : <Navigate to='/login' replace />;
}