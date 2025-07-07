import type { IFullUser } from '@/types/user.types'
import {IChannel} from "@/types/cannel.types";

export interface ISettingsData extends Pick<IFullUser, 'name' | 'email'> {
    password?: string
    channel?: Pick<IChannel, 'avatarUrl' | 'bannerUrl' | 'description' | 'slug'>
}
