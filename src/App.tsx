import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './pages/Main';
import Professor from './pages/Professor';
import Researcher from './pages/Researcher';
import Publications from './pages/Publications';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/professor" element={<Professor />} />
            <Route path="/researcher" element={<Researcher />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;