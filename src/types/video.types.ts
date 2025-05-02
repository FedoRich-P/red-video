import { IChannel } from '@/types/cannel.types';

export interface IVideo {
	id: string
	title: string
	slug: string
	description: string
	thumbnailUrl: string
	videoFileName: string
	viewsCount: number
	isPublic: boolean
	channel: IChannel
	createdAt: string
}
