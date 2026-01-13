import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import SignUp from "./pages/SignUp";
import HomeLayout from "./Layout/HomeLayout";



const App = () => {
  return (
    <div className="b ">
      
      <Routes>

        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<HomeLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

        </Route>
        
   

      </Routes>
    </div>
  );
};

export default App;
