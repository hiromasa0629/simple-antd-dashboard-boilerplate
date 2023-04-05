import { ProColumns } from "@ant-design/pro-components"
import { Card, Input } from "antd";
import { Link } from "react-router-dom";
import { PostsType } from "../../../apis/ApiTyping"

const ProductsColumns = (page: number): ProColumns<PostsType>[] => [
	/* dataindex has to match data key */
	{
		valueType: 'index',
		title: 'Index',
		render: (dom, record, index) => ((page - 1) * 10) + index + 1,
		key: 'index',
		responsive: ['lg']
	},
	{
		title: 'User ID',
		dataIndex: 'userId',
		key: 'userId',
		hideInSearch: true,
	},
	{
		title: 'Post ID',
		dataIndex: 'id',
		key: 'id',
		hideInSearch: true,
		sorter: (first, second) => first.id - second.id,
		render: (dom, record, index) => (
			<Link to={record.id.toString()}>{dom}</Link>
		)
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
		width: "20%",
		responsive: ['lg']
	},
	{
		title: 'Body',
		dataIndex: 'body',
		key: 'body',
		width: "50%",
		responsive: ['lg']
	}
];

export default ProductsColumns;