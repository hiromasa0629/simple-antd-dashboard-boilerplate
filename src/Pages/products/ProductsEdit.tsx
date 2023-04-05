import { FooterToolbar, PageContainer, ProCard, ProForm, ProFormGroup, ProFormRadio, ProFormSelect, ProFormText, ProFormTextArea, ProFormTreeSelect } from '@ant-design/pro-components'
import { useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import PostsApis from '../../apis/Posts';
import { BreadcrumbsContext } from '../../utilities/BreadcrumbsContext';
import ProductsFormRadio from './components/ProductsFormRadio';
import ProductsFormTreeSelect from './components/ProductsFormTreeSelect';

interface ProductsFormType {
	first: string,
	second: string,
	radio: number,
	selecttree: number[],
	textarea: string
};

const ProductsEdit = () => {
	const breadcrumbs = useContext(BreadcrumbsContext);
	const { id } = useParams();
	
	const handleValuesChange = (values: any) => {
		console.log(values);
	}
	
	const queryDetail = useQuery({
		queryKey: ['postsDetails'],
		queryFn: async () => {
			const res = await PostsApis.getPostDetail(id as string);
			return res.data
		}
	})
	
	const [submit, submitDom] = message.useMessage();
	
	const queryEdit = useQuery({
		queryKey: ['postEdit'],
		queryFn: async () => new Promise(resolve => {
			setTimeout(() => {
				return (resolve([{ data: 'ok' }])) 
			}, 1000);
		}),
		enabled: false,
	})
	
	const handleSubmit = async (value: ProductsFormType) => {
		console.log(value);
		submit.loading({ content: 'Editing...' });
		const res = await queryEdit.refetch();
		if (res.data) {
			submit.destroy();
			submit.success({ content: 'Edited!' });
		}
			
	}
	
	return (
		<PageContainer
			header={{ breadcrumb: breadcrumbs }}
		>
			{submitDom}
			<ProCard	
				title={`Edit ${id}`}
				headerBordered
			>
				<ProForm<ProductsFormType>
					onValuesChange={handleValuesChange}
					grid
					submitter={{ render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar> }} // Submit button at footer
					onFinish={async (values) => handleSubmit(values)}
				>
					<ProductsFormRadio selected={2} />
					<ProductsFormTreeSelect selected={[1]} />
					<ProFormGroup>
						<ProFormText name="first" label="First" placeholder={`first`} colProps={{ xs: 24, md: 12 }} />
						<ProFormText 
							name="second"
							label="Second"
							placeholder={`second`}
							colProps={{ xs: 24, md: 12 }}
							rules={[
								{ required: true, message: 'Please enter something' }
							]}
						/>
					</ProFormGroup>
					<ProFormTextArea name="textarea" label="Text area" placeholder={`textarea`} />
				</ProForm>
			</ProCard>
		</PageContainer>
	)
}

export default ProductsEdit