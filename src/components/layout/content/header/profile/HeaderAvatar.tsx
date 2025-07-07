import Image from 'next/image';
import Link from 'next/link';

import {STUDIO_PAGE} from '@/config/studio-page';
import {IFullUser} from "@/types/user.types";

interface Props {
    profile: IFullUser | undefined
}

export function HeaderAvatar({profile}: Props) {
    return (
        <div className="flex flex-col items-center justify-start">
            <Link href={STUDIO_PAGE.SETTINGS} className="shrink-0">
                <Image
                    src={profile?.channel?.avatarUrl || '/globe.svg'}
                    alt="User Avatar"
                    width={30}
                    height={30}
                    className="rounded-lg"
                />
            </Link>

            {!profile?.verificationToken && (
                <span className="bg-[var(--primary-color)] py-0.5 px-1 rounded text-xs">
                    Not verified!
                </span>
            )}
        </div>
    )
}
