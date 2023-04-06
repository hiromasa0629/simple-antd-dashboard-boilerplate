import React, { PropsWithChildren, useEffect, useState } from 'react'
import RefResizeObserver, { SizeInfo } from 'rc-resize-observer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MyContext, MyContextType, ScreensizeType } from './MyContext'
import { ConfigProvider } from 'antd'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { BreadcrumbItemType, ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { enUSIntl } from '@ant-design/pro-provider'

const MyProvider = (props: PropsWithChildren) => {
	const navigate = useNavigate();
	const location = useLocation();
	const queryClient = new QueryClient();
	const [crumbs, setCrumbs] = useState<BreadcrumbItemType[]>([]);
	const [screensize, setScreensize] = useState<ScreensizeType>();

	// ===== Handle breadcrumbs by getting pathname from useLocation =====
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
	
	const handleResize = (size: SizeInfo) => {
		if (size.width >= 1600) setScreensize('xxl');
		else if (size.width >= 1200) setScreensize('xl');
		else if (size.width >= 992) setScreensize('lg');
		else if (size.width >= 768) setScreensize('md');
		else if (size.width >= 576) setScreensize('sm');
		else setScreensize('xs');
	}
	
	const MyContextValue: MyContextType = {
		breadcrumbs: {
			items: crumbs,
			itemRender: breadcrumbsItemRender
		},
		location: location,
		ssize: screensize,
		ssizeArray: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
		navigate: navigate
	}
	
	return (
		<RefResizeObserver onResize={ handleResize }>
			<QueryClientProvider client={ queryClient }>
				<MyContext.Provider value={ MyContextValue }>
					<ConfigProvider locale={ enUSIntl }>
						{ props.children }
					</ConfigProvider>
				</MyContext.Provider>
			</QueryClientProvider>
		</RefResizeObserver>
	)
}

export default MyProvider