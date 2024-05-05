import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Header from "./components/Header/Header";
import {StyledApp} from "./style";

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="two" element={<ProfilePage />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
