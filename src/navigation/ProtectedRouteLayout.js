import { Navigate, Outlet } from "react-router"

export const ProtectedRouteLayout = () => {
  const token = sessionStorage.getItem('token');

  if (!token) {
    return <Navigate to="/signin" />
  }
  return <Outlet />
}
