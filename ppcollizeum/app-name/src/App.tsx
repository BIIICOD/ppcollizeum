import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Header from "./components/Header/Header";
import {StyledApp} from "./style";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthContext";
import BookPage from "./pages/BookPage/BookPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import CartPage from "./pages/CartPage/CartPage";



function App() {
  return (
    <BrowserRouter>
      <StyledApp>
          <AuthProvider>
          <Header/>
              <Routes>
                  <Route path="*" element={<ErrorPage />} />
                  <Route path="login" element={<Login/>} />
                  <Route path="/" element={<MainPage />} />
                  <Route path="book" element={<BookPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/cart" element={<CartPage />} />
              </Routes>
          <Footer/>
          </AuthProvider>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
