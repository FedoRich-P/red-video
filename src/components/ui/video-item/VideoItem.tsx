import { m } from 'framer-motion';
import { Check, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { PAGE } from '@/config/public-page.config';

import { transformDate } from '@/utils/transform-date';
import { transformViews } from '@/utils/transform-views';

import type { IVideo } from '@/types/video.types';

interface Props {
	video: IVideo;
	Icon?: LucideIcon;
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<article className={'p-4 pt-2 flex gap-2 flex-col border-1 border-[var(--border-color)]'}>
			<div className="relative mb-1.5">
				<Link
					href={PAGE.VIDEO(video.slug)}
					className={'h-[140px] w-full'}>
					<Image
						src={video.thumbnailUrl}
						width={500}
						height={500}
						alt={video?.title || 'Video thumbnail'}
						className="rounded-md w-full h-auto aspect-video object-cover"
						priority
					/>
				</Link>
				<Link
					href={PAGE.CHANNEL(video.channel.slug)}
					className="absolute left-1.5 bottom-2">
					<Image
						src={video.channel.avatarUrl}
						width={35}
						height={35}
						alt={video.channel.name || 'Channel avatar'}
						className="rounded-full shadow h-auto w-auto aspect-square object-cover"
					/>
				</Link>
			</div>
			<div className="mb-1.5 flex items-center justify-between">
				<div className="flex items-center gap-1">
					{Icon && (
						<Icon
							className="text-red-600 w-auto h-auto"
							size={20}
						/>
					)}
					<span className="text-gray-400 text-sm">{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span className="text-gray-400 text-xs">{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div className="mb-auto">
				<Link
					href={PAGE.VIDEO(video.slug)}
					className="line-clamp-2 leading-[1.3]">
					{video.title}
				</Link>
			</div>
			<Link
				href={PAGE.CHANNEL(video.channel.slug)}
				className="flex items-center justify-end gap-2 pt-1">
				{video.channel.isVerified && (
					<Check
						className="text-green-400"
						size={17}
					/>
				)}
				<span className="text-gray-400 text-sm">{video.channel.user.name}</span>
			</Link>
		</article>
	);
}
