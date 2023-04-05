import { DashboardOutlined, HddOutlined, SettingOutlined, UploadOutlined } from "@ant-design/icons";
import { MenuDataItem } from "@ant-design/pro-components";

const LayoutRoutes: MenuDataItem = { 
	path: '/',
	children: [
		{ 
			name: 'Dashboard',
			path: 'dashboard', 
			icon: <DashboardOutlined /> 
		},
		{
			icon: <HddOutlined />,
			path: 'products',
			name: 'Products',
			children: [
				{
					name: 'Import products',
					path: 'import'
				}
			]
		},
		{
			name: 'Settings',
			path: 'settings',
			icon: <SettingOutlined />
		}
	]
};


export default LayoutRoutes
