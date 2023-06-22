import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

