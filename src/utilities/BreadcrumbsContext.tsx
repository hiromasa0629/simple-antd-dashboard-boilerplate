import { BreadcrumbItemType, ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { createContext } from 'react'

export interface BreadcrumbsContextType {
	items?: BreadcrumbItemType[],
	itemRender?: (item: ItemType, params: any, items: ItemType[], paths: string[]) => JSX.Element | undefined,
}

// export const BreadcrumbsContext = createContext<BreadcrumbsContextType>({});