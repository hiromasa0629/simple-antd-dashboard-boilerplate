import React, { useContext } from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import { BreadcrumbsContext } from '../../utilities/BreadcrumbsContext';


const Dashbaord = () => {	
	
	const breadcrumbs = useContext(BreadcrumbsContext);
	
	return (
		<PageContainer
			header={{ breadcrumb: breadcrumbs }}
		>
			<div>Dashbaord</div>
		</PageContainer>
	)
}

export default Dashbaord