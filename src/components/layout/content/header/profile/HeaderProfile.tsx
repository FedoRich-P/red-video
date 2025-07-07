import {LogIn} from 'lucide-react';

import {HeaderAvatar} from '@/components/layout/content/header/profile/HeaderAvatar';

import {LinkButton} from '@/ui/button/LinkButton';

import {PAGE} from '@/config/public-page.config';

import {selectIsLoggedIn} from '@/store/authSlice';
import {useAppSelector} from '@/store/hooks';
import {useProfile} from "@/hooks/useProfile";
import {SkeletonLoader} from "@/ui/skeleton-loader/SkeletonLoader";

export function HeaderProfile() {
    const { profile, isLoading } = useProfile()
    const isLoggedIn = useAppSelector(selectIsLoggedIn)

    if (isLoading) return <SkeletonLoader className={'w-8 h-8 mb-0 rounded-lg'}/>

    if (!isLoggedIn || !profile) {
        return (
            <LinkButton href={PAGE.AUTH}>
                <LogIn />
                Auth
            </LinkButton>
        )
    }

    return <HeaderAvatar profile={profile} />
}

export default HeaderProfile
