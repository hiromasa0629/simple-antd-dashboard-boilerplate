import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { default as Pages } from './Pages/index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: '/', element: <Navigate to="/dashboard" replace /> },
			
			{ path: '/dashboard', element: <Pages.Dashboard.Dashbaord /> },		
			{ path: '/products', element: <Pages.Products.List /> },
			{ path: '/products/:id', element: <Pages.Products.Details /> },
			{ path: '/products/:id/edit', element: <Pages.Products.Edit /> },
			{ path: '/products/import', element: <Pages.Products.Create /> },
			
			{ path: '/settings', element: <Pages.Settings.Settings /> },
		]
	}
])

root.render(
  <React.StrictMode>
		<RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
