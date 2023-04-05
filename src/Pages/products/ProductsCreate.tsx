import { PageContainer } from '@ant-design/pro-components'
import { useContext } from 'react'
import { BreadcrumbsContext } from '../../utilities/BreadcrumbsContext'

const ProductsCreate = () => {
	
	const breadcrumbs = useContext(BreadcrumbsContext);
	
	return (
		<PageContainer
			header={{ breadcrumb: breadcrumbs }}
		>
			<div>ProductsCreate</div>
			<div>WTf</div>
		</PageContainer>
	)
}

export default ProductsCreate