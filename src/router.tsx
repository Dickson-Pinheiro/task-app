import { BrowserRouter, Routes, Route } from "react-router-dom";
import Painel from "./pages/Painel";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivateRoute from "./layouts/PrivateRoute";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Signin />} />
                <Route path="/" element={<PrivateRoute />} >
                    <Route path="/painel" element={<Painel />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}