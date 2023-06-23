// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage'; 
import ContactPage from './Pages/ContactPage/ContactPage';
import PhotoPage from './Pages/PhotoPage/PhotoPage';
import DeletePage from './Pages/DeletePage/DeletePage';
import PhotoGallery from './Pages/PhotoGallery/PhotoGallery';
import AdminPage from './Pages/AdminPage/AdminPage';
import Footer from './Components/Footer/Footer';
import './styles/global.scss';

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
          <Route path="/photogallery/" element={<PhotoGallery />} />
          <Route path="/admin/" element={<AdminPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;