import { RouterProvider } from "react-router"
import { router } from "./Routes"

export function AppRoutes() {
    return (
      <RouterProvider router={router}  />  
    )
}