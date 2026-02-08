import { createContext, useContext, useEffect, useState } from "react";
import { mockAPI } from "../service/MockData";

export const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        const isAuthenticated = mockAPI.isValidToken();
        setIsAuthenticated(isAuthenticated);
    }

    const login = (username, password) => {
        const result = mockAPI.login(username, password);
        if (result.success) {
            setIsAuthenticated(true);
            return result;
        }
        setIsAuthenticated(false);
        return {success:false}
    }

    const logout = () => {
        mockAPI.logout();
        setIsAuthenticated(false);
        return{success: true}
    }

    const value = {
        isAuthenticated,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
