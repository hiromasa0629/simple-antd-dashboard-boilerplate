import { ProLayout } from '@ant-design/pro-components'
import LayoutRoutes from './LayoutRoutes'
import { Link, NavigateFunction, Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
	const navigate: NavigateFunction = useNavigate();
	
	return (
		<ProLayout
			route={LayoutRoutes}
			menuItemRender={(item, dom) => (
				<Link to={`${item.path}`}>{dom}</Link>
			)}
			subMenuItemRender={(item, dom) => (
				<div onClick={() => navigate(`${item.path}`)}>{dom}</div>
			)}
			onMenuHeaderClick={(e) => { navigate('/') }}
			token={{ sider: { colorMenuBackground: 'white' } }}
			locale={'en-US'}
		>
			<Outlet />
		</ProLayout>
	)
}

export default Layout