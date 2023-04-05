import React, { useContext, useState } from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import { MyContext } from '../../utilities/MyContext';
import { ProCard } from '@ant-design/pro-components';
import { Statistic } from 'antd';
import RefResizeObserver from 'rc-resize-observer';

const Dashbaord = () => {	
	
	const { breadcrumbs, ssize, ssizeArray } = useContext(MyContext);
	
	return (
		<PageContainer
			header={{ breadcrumb: breadcrumbs }}
		>
			<ProCard>
				<ProCard.Group 
					title="Products stats" 
					direction={ssizeArray.indexOf(ssize!) >= ssizeArray.indexOf('md') ? "row" : "column"} 
					headerBordered 
					bordered
				>
					<ProCard>
						<Statistic title="Total" value={16574} />
					</ProCard>
					<ProCard.Divider type={ssizeArray.indexOf(ssize!) >= ssizeArray.indexOf('md') ? "vertical" : "horizontal"} />
					<ProCard>
						<Statistic title="Sold out" value={32} />
					</ProCard>
					<ProCard.Divider type={ssizeArray.indexOf(ssize!) >= ssizeArray.indexOf('md') ? "vertical" : "horizontal"} />
					<ProCard>
						<Statistic title="冻结金额" value={112893.0} />
					</ProCard>
				</ProCard.Group>
			</ProCard>
		</PageContainer>
	)
}

export default Dashbaord