import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  let token = localStorage.getItem("token");


  return token === null;
};

export default function PrivateRoute({ element }) {
  return <>{isAuthenticated() ? element : <Navigate to="/" />}</>;
}
