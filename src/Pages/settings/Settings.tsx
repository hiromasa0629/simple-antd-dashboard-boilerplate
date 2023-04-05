import { PageContainer } from '@ant-design/pro-components'
import React, { useContext } from 'react'
import { BreadcrumbsContext } from '../../utilities/BreadcrumbsContext'

const Settings = () => {
	
	const breadcrumbs = useContext(BreadcrumbsContext);
	
	return (
		<PageContainer
			header={{ breadcrumb: breadcrumbs }}
		>
			<div>Settings</div>
		</PageContainer>
	)
}

export default Settings