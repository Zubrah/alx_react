import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';

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