import { ProFormRadio } from '@ant-design/pro-components'
import React from 'react'

interface ProductsFormRadioProps {
	selected?: number
}

const ProductsFormRadio = (props: ProductsFormRadioProps) => {
	return (
		<ProFormRadio.Group
			name="radio"
			label="Radio"
			request={async () => {
				return [
					{ label: 'item 1', value: 1 },
					{ label: 'item 2', value: 2 },
					{ label: 'item 3', value: 3 }
				]
			}}
			initialValue={props.selected ?? ''}
		/>
	)
}

export default ProductsFormRadio