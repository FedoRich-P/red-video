import { IVideo } from '@/types/video.types';

export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	verificationToken: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface IChannel {
	id: string
	name: string
	slug: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	user: User
	videos: IVideo[]
	subscribers: []
	createdAt: string
}
