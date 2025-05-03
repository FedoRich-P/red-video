import axios, { AxiosRequestConfig, AxiosResponseHeaders } from 'axios';

import { IChannel } from '@/types/cannel.types';
import { IVideo } from '@/types/video.types';
import { axiosClassic } from '@/api/axios';

export interface AxiosVideoResponse {
	config: AxiosRequestConfig;
	data: IVideo[];
	headers: AxiosResponseHeaders;
	request: XMLHttpRequest;
	status: number;
	statusText: string;
}

interface Explore {
	limit: number;
	page: number;
	totalCount: number;
	totalPages: number;
	videos: IVideo[];
}

class VideoService {
	getAll(searchTerm?: string | null) {
		return axiosClassic.get<Explore>(`/videos`, searchTerm ? {params: {searchTerm}} : {});
	}

	getGamesVideos() {
		return axiosClassic.get<Explore>(`/videos/games`);
	}

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`/videos/trending`);
	}

	getExploreVideos() {
		return axiosClassic.get<Explore>(`/videos/explore`);
	}
}

export const videoService = new VideoService();
