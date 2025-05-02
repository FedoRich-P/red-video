import { IVideo } from '@/types/video.types';

export interface IChannel {
	id: string
	name: string
	slug: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	// user:
	videos: IVideo[]
	subscribers: []
	createdAt: string
}
