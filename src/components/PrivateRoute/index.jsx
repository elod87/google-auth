import { Navigate } from "react-router-dom";
import { getAppToken, getUserData } from "../../auth";

const PrivateRoute = ({ component: Component }) => {
    const token = getAppToken();
    const userData = getUserData();

    const isLoggedIn = token && userData;

    return isLoggedIn ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
