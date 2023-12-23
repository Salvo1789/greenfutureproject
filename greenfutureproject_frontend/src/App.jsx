import MainPage from './components/mainPage';
import LoginPage from './components/LoginPage';
import GFNavbar from './components/GFNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from './components/RegisterPage';

function App() {


  return (
    
      <BrowserRouter>
        <GFNavbar />
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="register" element={<RegisterPage />}/>
          <Route path="/main" element={<MainPage />}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
