import axios from 'axios';

class VideoService {
	getExploreVideos() {
		return axios.get(`http://localhost:4200/api/videos/explore`);
	}
}

export const videoService = new VideoService();