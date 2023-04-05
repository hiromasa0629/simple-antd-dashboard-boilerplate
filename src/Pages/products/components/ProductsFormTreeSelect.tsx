import { ProFormTreeSelect } from '@ant-design/pro-components';
import React from 'react'

interface ProductsFormTreeSelectProps {
	selected?: number[]
}

const ProductsFormTreeSelect = (props: ProductsFormTreeSelectProps) => {
	return (
		<ProFormTreeSelect
			name="selecttree"
			label="Select Tree"
			fieldProps={{
				showSearch: true, 
				treeNodeFilterProp: 'title',
				multiple: true
			}}
			request={async () => {
					return [
						{ title: 'Select 1', value: 1 },
						{ title: 'Select 2', value: 2 },
					];
				}
			}
			initialValue={props.selected ?? []}
		/>
	)
}

export default ProductsFormTreeSelect