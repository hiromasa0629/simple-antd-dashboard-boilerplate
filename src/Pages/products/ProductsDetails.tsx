import { PageContainer, ProCard, ProCardProps } from '@ant-design/pro-components'
import { MyContext } from '../../utilities/MyContext';
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PostsApis from '../../apis/Posts';
import { Button, Space } from 'antd';
import { message } from 'antd';

const ProductsDetails = () => {
	
	const context = useContext(MyContext);
	const [deleteApi, contextHolder] = message.useMessage();
	const { id } = useParams();
	
	const queryDetails = useQuery({ 
		queryKey: ['postDetail'],
		queryFn: async () => {
			const res = await PostsApis.getPostDetail(id as string);
			return (res.data);
		}
	});
	
	const queryDelete = useQuery({
		queryKey: ['postDelete'],
		queryFn: async () => new Promise(resolve => {
			setTimeout(() => {
				return (resolve([{ data: 'ok' }])) 
			}, 1000);
		}),
		enabled: false,
	})
	
	const ProCardConfig: ProCardProps = {		// ProCardProps type
		title: `Product ${id}`,
	}
	
	const handleDelete = async () => {
		deleteApi.loading({ content: 'Deleting...' });
		const res = await queryDelete.refetch();
		if (res.data) {
			deleteApi.destroy();
			deleteApi.success({ content: 'Deleted', duration: 2 })
		}
	}
	
	return (
		<PageContainer
			header={{ breadcrumb: context.breadcrumbs }}
		>
			{ contextHolder }
			<ProCard
				// title={`Product ${id}`}
				{...ProCardConfig}
				loading={queryDetails.isLoading}
				gutter={[8, 8]}
				wrap	/* Enable wrap */
				headerBordered
				extra={
					<Space>
						<Link to={`/products/${id}/edit`}>
							<Button>Edit</Button>
						</Link>
						<Button danger onClick={ handleDelete }>
							Delete
						</Button>
					</Space>
				}	/* Top right corner */
			>
				<ProCard 
					colSpan={{ xs: 24, md: 12 }}
					bordered
					title='Body'
					style={{ height: '100%' }}
				>
					{ queryDetails.data?.body }
				</ProCard>
				<ProCard 
					colSpan={{ xs: 24, md: 12 }}
					bordered
					style={{ height: '100%' }}
					title='Title'
				>
					{ queryDetails.data?.title }
				</ProCard>
			</ProCard>
		</PageContainer>
	)
}

export default ProductsDetails