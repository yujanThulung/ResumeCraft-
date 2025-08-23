import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../features/auth/authSlice";
import { Loader } from "../components";

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();

    const { user, loading } = useSelector((state) => state.auth);

    if (loading) {
        return <Loader />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
