import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { default as Pages } from "../Pages/index"
import App from "../App"
import Layout from "../layout/Layout"

const BrowserRouter = createBrowserRouter([
	{
		element: <App />,
		path: '/',
		children: [
			{
				element: <Layout />,
				children: [
					{ path: '/', element: <Navigate to="/dashboard" replace /> },
					
					{ path: '/dashboard', element: <Pages.Dashboard.Dashbaord /> },		
					{ path: '/products', element: <Pages.Products.List /> },
					{ path: '/products/:id', element: <Pages.Products.Details /> },
					{ path: '/products/:id/edit', element: <Pages.Products.Edit /> },
					{ path: '/products/import', element: <Pages.Products.Create /> },
					
					{ path: '/settings', element: <Pages.Settings.Settings /> },
				]
			},
			{
				path: '/login',
				element: <Pages.Login.Login />
			}
		]
	},
])

const Router = () => {
	return (
		<RouterProvider router={BrowserRouter}/>
	)
}

export default Router