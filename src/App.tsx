import { Outlet, RouterProvider } from 'react-router-dom'
import MyProvider from './utilities/MyProvider'
import Router from './router/router'

const App = () => {
	return (
		<MyProvider>
			<Outlet/>
		</MyProvider>
		// <Outlet />
		// <div>wtf</div>
	)
}

export default App