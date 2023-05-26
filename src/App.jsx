import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadPage from './components/UploadPage/UploadPage';
import Header from './components/Header/Header';
import VideoPage from './components/VideoPage/VideoPage';
import VideoList from './components/VideoList/VideoList';

function App() {

  return (
    <BrowserRouter>
      
      <Header />

      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/videos/:id" element={<VideoPage />} /> 
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

// {
//   "api_key": "92ff28cd-7e73-4069-852a-6a0708f75739"
//   }