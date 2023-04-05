import { NewBreadcrumbProps } from "antd/es/breadcrumb/Breadcrumb";
import { BreadcrumbsContextType } from "./BreadcrumbsContext";
import { Location } from "react-router-dom";
import { createContext } from "react";

/** 
 * xxl	: >= 1600
 * xl		: >= 1200
 * lg		: >= 992
 * md		: >= 768
 * sm		: >= 576
 * xs		: < 576
 * */ 
export type ScreensizeType = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";

export interface MyContextType {
	breadcrumbs?: NewBreadcrumbProps,
	location?: Location,
	ssize?: ScreensizeType,
	ssizeArray: string[],
};

export const MyContext = createContext<MyContextType>({
	ssizeArray: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
});