import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Routes, 
    Route,
    HashRouter
} from 'react-router-dom';

import App from './App';
import CollectionPage from './routes/CollectionPage';


ReactDOM.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />} >

                <Route path="main" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="collection">
                    <Route path=":collectionId" element={<CollectionPage />} />
                    <Route path="denied" element={<CollectionPage />} />
                </Route>

            </Route>
        </Routes>
    </HashRouter>
    ,
    document.getElementById('root')
);

