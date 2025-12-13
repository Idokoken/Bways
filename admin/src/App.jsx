import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import Orders from "./pages/Orders"
import ListProduct from "./pages/ListProduct"
import AddProduct from "./pages/AddProduct"

import ScrollToTop from './ScrollToTop';
import AdminHome from "./AdminHome";

const backendUrl = import.meta.env.APP_BASE_URL


function App() {
  const [token, setToken] = useState("")
  return (
    <div>
      {token === "" ?
        <LoginPage /> :
        <>
          <Router>
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={AdminHome} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/signin" element={<LoginPage />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/list" element={<ListProduct />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </>
      }
    </div>
  );
}

export default App;
