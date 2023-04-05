import React, { useContext, useState } from 'react'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import { MyContext } from '../../utilities/MyContext'
import PostsApis from '../../apis/Posts'
import { PostsType } from '../../apis/ApiTyping'
import { TablePaginationConfig } from 'antd'
import ProductsColumns from './components/ProductsColumns'

interface TableParamsType {
	pageSize?: number | undefined,
	current?: number | undefined,
	body?: string,
	title?: string,
};

const Products = () => {

	const context = useContext(MyContext);
	const [data, setData] = useState<PostsType[]>([]);
	const [defaultData, setDefaultData] = useState<PostsType[]>([]);
	const [page, setPage] = useState<number>(1);
	
	const paginationConfig: TablePaginationConfig = {
		pageSize: 10,
		showSizeChanger: false,
		onChange: (current: number) => setPage(current)
	}
	
	const tableRequest = async ( params: TableParamsType ) => {
		if (defaultData?.length === 0) {
			const posts = await PostsApis.getPosts();
			posts.data.forEach((obj, index) => obj.key = index); /* Fix key problem */
			setDefaultData(posts.data);
			setData(posts.data);
			return {
				data: [],
				success: true,
			};
		} else {
			let filterBySearch: PostsType[] = defaultData
				.filter((obj) => obj.body.includes(params.body ?? ''))
				.filter((obj) => obj.title.includes(params.title ?? ''));
			setData(filterBySearch);
			return {
				data: [],
				success: true,
			}
		}
	}
	
	return (
		<PageContainer
			header={{ breadcrumb: context.breadcrumbs }}
		>
			<ProTable<PostsType>
				/* Request data */
				request={tableRequest}
				dataSource={data}
				columns={ProductsColumns(page)}
				pagination={paginationConfig as TablePaginationConfig}
				search={{
					filterType: 'light',
				}}
				options={ false }
				scroll={{ x: '100%' }}
			/>
		</PageContainer>
	)
}

export default Products