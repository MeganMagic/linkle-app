import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <nav className="sidebar">

            </nav>

            <Outlet />
        </div>
    );
}

export default App;
