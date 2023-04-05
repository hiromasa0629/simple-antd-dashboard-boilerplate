import { apiClient } from "./ApiClient"
import { AxiosResponse } from "axios";
import { PostsType } from "./ApiTyping";

const getPosts = async (): Promise< AxiosResponse<PostsType[]> > =>  {
	return await apiClient.get('/posts');
}

const getPostDetail = async (id: string): Promise< AxiosResponse<PostsType> > => {
	return await apiClient.get(`/posts/${id}`);
}

const PostsApis = {
	getPosts,
	getPostDetail
};

export default PostsApis;
