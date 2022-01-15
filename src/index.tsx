import React from 'react';
import ReactDOM from 'react-dom';

import {
    Routes, 
    Route,
    BrowserRouter
} from 'react-router-dom';

import './scss/styles.scss';

import App from './App';
import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import CollectionPage from './routes/CollectionPage';
import SearchPage from './routes/SearchPage';
import ProfilePage from './routes/ProfilePage';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >

                <Route path="main" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />

                <Route path="collection">
                    <Route path=":collectionId" element={<CollectionPage />} />
                    <Route path="denied" element={<CollectionPage />} />
                </Route>

                <Route path="searchresult">
                    <Route path="all/:searchText" element={<SearchPage type='ALL'/>} />
                    <Route path="my/:searchText" element={<SearchPage type='MY' />} />
                </Route>

                <Route path="profile">
                    <Route path="my" element={<ProfilePage type="MY"/>} />
                    <Route path=":userId" element={<ProfilePage type="USER" />} />
                </Route>

            </Route>
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

