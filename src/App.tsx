import Layout from './layout/Layout'
import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BreadcrumbItemType, ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { BreadcrumbsContext } from './utilities/BreadcrumbsContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import enUSIntl from 'antd/locale/en_US';

const App = () => {
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
	}, [location]);
	
	const breadcrumbsItemRender = (item: ItemType, params: any, items: ItemType[], paths: string[]) => {
		const it: BreadcrumbItemType = item as BreadcrumbItemType;
		return <Link to={`${it.path}`} >{it.title}</Link>
	}
	// ===================================================================
	
	const queryClient = new QueryClient();
	
	return (
		<QueryClientProvider
			client={queryClient}
		>
			<BreadcrumbsContext.Provider 
				value={{ items: crumbs, itemRender: breadcrumbsItemRender}}
			>
				<ConfigProvider
					locale={ enUSIntl }
				>
					<Layout />
				</ConfigProvider>
			</BreadcrumbsContext.Provider>
		</QueryClientProvider>
	)
}

export default App