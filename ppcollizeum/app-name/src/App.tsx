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
                  <Route path="three" element={<ProfilePage />} />
              </Routes>
          <Footer/>
          </AuthProvider>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
