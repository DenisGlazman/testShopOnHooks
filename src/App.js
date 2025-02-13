import './App.css';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import BestSellers from './Components/BestSellers/BestSellers';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';


function App() {

    const [productsInCart, setProductsInCart] = useState([]);

    return (
        <div className="App">
            <Router >
                <div className="App">
                    <Header />
                    <div className="main-content">
                        <Routes>
                            <Route
                                path="/"
                                element={<BestSellers productsInCart={productsInCart} setProductsInCart={setProductsInCart}

                                />}
                            />
                            <Route
                                path="/product/:productId"
                                element={<Product productsInCart={productsInCart} setProductsInCart={setProductsInCart} />}
                            />
                            <Route
                                path="/cart"
                                element={<Cart productsInCart={productsInCart} setProductsInCart={setProductsInCart} />}
                            />

                            />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
