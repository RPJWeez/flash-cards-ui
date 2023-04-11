import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout';
import { Main } from './components/main';
import './index.css';
import reportWebVitals from './reportWebVitals';

const THEME = createTheme({
  typography: {
    // h2: {
    //   //open sans,helvetica neue,Helvetica,Arial,sans-serif
    //   "fontFamily": `open sans, helvetica neue, Helvetica, "Arial", sans-serif`,
    //   "fontSize": 28,
    //   "fontWeight": 10
    // }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Main />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
