import MainPage from './components/mainPage';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/main" element={<MainPage />}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
