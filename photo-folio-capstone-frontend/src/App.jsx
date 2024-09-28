import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import PhotoPage from './Pages/PhotoPage/PhotoPage';
import PhotoGallery from './Pages/PhotoGallery/PhotoGallery';
import AdminPage from './Pages/AdminPage/AdminPage';
import Footer from './Components/Footer/Footer';
import './styles/global.scss';

function App() {
  return (
    <>
      <Router>

        <Header />
        <Routes>
          <Route path="/pp/" element={<HomePage />} />
          <Route path="/pp/contact" element={<ContactPage />} />
          <Route path="/pp/photos/:id" element={<PhotoPage />} />
          <Route path="/pp/photogallery" element={<PhotoGallery />} />
          <Route path="/pp/admin" element={<AdminPage />} />
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;