import { Outlet } from "react-router"
import { Navigate } from "react-router-dom"

export const UnprotectedRouteLayout = () => {
  const token = sessionStorage.getItem('token');

  if (token) {
    return <Navigate to="/quotulator" />
  }
  console.log("We are trying to render a unprotected route", token)

  return <Outlet />
}
