import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import NewVisitorPage from './components/NewVisitorPage';
import ExistingVisitorPage from './components/ExistingVisitorPage';
import CheckedInPage from './components/CheckedInPage';
import CheckedOutPage from './components/CheckedOutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/new" element={<NewVisitorPage />} />
    <Route path="/existing" element={<ExistingVisitorPage />} />
    <Route path="/checkedin" element={<CheckedInPage />} />
    <Route path="/checkedout" element={<CheckedOutPage />} />
  </Routes>
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
