import Layout from './layout/Layout'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BreadcrumbItemType, ItemType } from 'antd/es/breadcrumb/Breadcrumb'
// import { BreadcrumbsContext } from './utilities/BreadcrumbsContext'
import { MyContext, MyContextType, ScreensizeType } from './utilities/MyContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import enUSIntl from 'antd/locale/en_US';
import RefResizeObserver, { OnResize, SizeInfo } from 'rc-resize-observer'

const App = () => {
	const navigate = useNavigate();
	
	// ===== Handle breadcrumbs by getting pathname from useLocation =====
	const location = useLocation();
	const [crumbs, setCrumbs] = useState<BreadcrumbItemType[]>([]);
	
	useEffect(() => {
		const splits: string[] = location.pathname.split('/').filter((val) => val.length > 0);
		const tmpcrumbs = splits.reduce<BreadcrumbItemType[]>((acc, seg) => {
			const path: string = `${splits.indexOf(seg) === 0 ? '' : acc[acc.length - 1].path}/${seg}`;
			return [
				...acc,
				{
					path: path,
					title: seg.charAt(0).toUpperCase() + seg.slice(1),
				}
			]
			
		}, [{ path: '/', title: "Home" }])
		setCrumbs(tmpcrumbs);
		
		// if (location.pathname === '/')
		// 	navigate('/dashboard');
	}, [location]);
	
	const breadcrumbsItemRender = (item: ItemType, params: any, items: ItemType[], paths: string[]) => {
		const it: BreadcrumbItemType = item as BreadcrumbItemType;
		return <Link to={`${it.path}`} >{it.title}</Link>
	}
	// ===================================================================
	
	// Handle screensize
	const [screensize, setScreensize] = useState<ScreensizeType>();
	const handleResize = (size: SizeInfo) => {
		if (size.width >= 1600) setScreensize('xxl');
		else if (size.width >= 1200) setScreensize('xl');
		else if (size.width >= 992) setScreensize('lg');
		else if (size.width >= 768) setScreensize('md');
		else if (size.width >= 576) setScreensize('sm');
		else setScreensize('xs');
	}
	// =====================
	
	const queryClient = new QueryClient();
	
	const MyContextValue: MyContextType = {
		breadcrumbs: {
			items: crumbs,
			itemRender: breadcrumbsItemRender
		},
		location: location,
		ssize: screensize,
		ssizeArray: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
	}
	
	return (
		<RefResizeObserver
			onResize={handleResize}
		>
			<QueryClientProvider
				client={queryClient}
			>
				<MyContext.Provider 
					value={MyContextValue}
				>
					<ConfigProvider
						locale={ enUSIntl }
					>
						<Layout />
					</ConfigProvider>
				</MyContext.Provider>
			</QueryClientProvider>
		</RefResizeObserver>
	)
}

export default App