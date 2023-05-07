/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { store } from './redux/store';
import { router } from './routes/App.Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Toaster />
        <RouterProvider router={router} />
    </Provider>
);
