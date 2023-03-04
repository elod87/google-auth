import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<PrivateRoute component={Profile} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
