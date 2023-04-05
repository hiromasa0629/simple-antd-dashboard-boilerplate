import { PageContainer } from '@ant-design/pro-components'
import { useContext } from 'react'
import { MyContext } from '../../utilities/MyContext';

const ProductsCreate = () => {
	
	const context = useContext(MyContext);
	
	return (
		<PageContainer
			header={{ breadcrumb: context.breadcrumbs }}
		>
			<div>ProductsCreate</div>
			<div>WTf</div>
		</PageContainer>
	)
}

export default ProductsCreate