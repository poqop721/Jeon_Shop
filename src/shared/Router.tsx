import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Layout from "./Layout";
import ScrollTo from "../components/ScrollTo";

const Router = () => {
    return(
        <BrowserRouter>
            <ScrollTo/>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="product" element={<Product/>} />
                    <Route path="product/:id" element={<Product/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router