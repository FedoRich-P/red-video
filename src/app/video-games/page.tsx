import { Gamepad2 } from 'lucide-react';
import { Metadata } from 'next';

import { Heading } from '@/ui/heading/Heading';
import { VideoItem } from '@/ui/video-item/VideoItem';

import { PAGE } from '@/config/public-page.config';

import { videoService } from '@/services/video.service';

export const metadata: Metadata = {
	title: 'Video game',
	description: 'Video games...',
	alternates: {
		canonical: PAGE.VIDEO_GAMES,
	},
	openGraph: {
		title: 'website',
		url: PAGE.VIDEO_GAMES,
	},
};

export default async function VideoGames() {
	const videos = await videoService.getGamesVideos();

	return (
		<section>
			<h2 className="hidden">Основные видео блоки</h2>
			<section className={'mb-3 pb-5 border-b-1 border-[var(--border-color)]'}>
				<Heading Icon={Gamepad2}>Games Video</Heading>
				<div className={'w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'}>
					{videos &&
						videos.data.videos.map((video) => (
							<VideoItem
								key={video.id}
								video={video}
							/>
						))}
				</div>
			</section>
		</section>
	);
}
