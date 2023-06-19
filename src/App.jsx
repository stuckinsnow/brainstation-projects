// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage'; 
import ContactPage from './Pages/ContactPage/ContactPage';
import PhotoPage from './Pages/PhotoPage/PhotoPage';
import DeletePage from './Pages/DeletePage/DeletePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/photos/:id" element={<PhotoPage />} />
          <Route path="/deletepage/" element={<DeletePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;