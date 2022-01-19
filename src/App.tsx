import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './components/SideNav/SideNav';

const App = () => {
    return (
        <div className="App">
            <SideNav />
            
            <div className='page-container'>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
