import { IChannel } from '@/types/cannel.types';
import { IWatchHistory } from '@/types/history.types';


export interface IUser {
	id: string
	name?: string
	email: string
}

export interface IFullUser extends IUser {
	channel?: IChannel
	subscriptions: IChannel[]
	watchHistory: IWatchHistory[]
	verificationToken?: string | null
}
