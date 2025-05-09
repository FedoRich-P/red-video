import { Flame, FlameIcon } from 'lucide-react';
import { Metadata } from 'next';

import { Heading } from '@/ui/heading/Heading';
import { VideoItem } from '@/ui/video-item/VideoItem';

import { PAGE } from '@/config/public-page.config';

import { videoService } from '@/services/video.service';

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Video in trending...',
	alternates: {
		canonical: PAGE.TRENDING,
	},
	openGraph: {
		title: 'website',
		url: PAGE.TRENDING,
	},
};

export default async function TrendingPage() {
	const videos = await videoService.getTrendingVideos();

	return (
		<section>
			<h2 className="hidden">Основные видео блоки</h2>
			<section className={'mb-3 pb-5 border-b-1 border-[var(--border-color)]'}>
				<Heading Icon={Flame}>Trending</Heading>
				<div className={'w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'}>
					{videos &&
						videos.data.map((video) => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={FlameIcon}
							/>
						))}
				</div>
			</section>
		</section>
	);
}
