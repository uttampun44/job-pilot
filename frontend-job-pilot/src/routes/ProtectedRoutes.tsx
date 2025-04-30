import { useAuth } from "@/context/features/AuthContext";
import Layout from "@/layout/backend/BackendLayout";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoutes() {

    const {token} = useAuth()

    if (!token) return <Navigate to="/login" />

    return <Layout>
        <Outlet />
    </Layout>
}