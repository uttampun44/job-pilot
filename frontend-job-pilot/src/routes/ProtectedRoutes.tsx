import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/features/AuthContext";
import Layout from "@/layout/backend/BackendLayout";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoutes() {

    const {token, isLoading} = useAuth()

    if (isLoading) return <Skeleton />

    if (!token) return <Navigate to="/login" />

    return <Layout>
        <Outlet />
    </Layout>
}