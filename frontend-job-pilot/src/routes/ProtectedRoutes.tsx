import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/features/AuthContext";
import Layout from "@/layout/backend/BackendLayout";
import React from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoutes() {

    const {token, isLoading} = useAuth()

    console.log("token", token)

    if (isLoading) return 
    <React.Fragment>
        <Skeleton />
    </React.Fragment>;

    if (!token) return <Navigate to="/login" />

    return <Layout>
        <Outlet />
    </Layout>
}