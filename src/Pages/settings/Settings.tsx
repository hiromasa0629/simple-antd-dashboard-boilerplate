import { PageContainer } from '@ant-design/pro-components'
import React, { useContext } from 'react'
import { MyContext } from '../../utilities/MyContext';

const Settings = () => {
	
	const context = useContext(MyContext);
	
	return (
		<PageContainer
			header={{ breadcrumb: context.breadcrumbs }}
		>
			<div>Settings</div>
		</PageContainer>
	)
}

export default Settings