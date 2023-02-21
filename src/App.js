import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from './pages/UserPage';
import Counter from './components/Counter';
import CartPage from './pages/CartPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/PrivacyPolicy'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/products/:productId' element={<ProductPage />} />
                {/* <Route path='/user' element={<UserPage />} /> */}
                <Route path='/cart' element={<CartPage />} />
                <Route path='/aboutus' element={<AboutUs/>} /> 
                <Route path='/privacypolicy' element={<PrivacyPolicy/>} /> 


                {/* Match all paths */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
