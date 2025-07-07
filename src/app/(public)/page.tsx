'use client';

import { useQuery } from '@tanstack/react-query';
import { Flame, FlameIcon } from 'lucide-react';

import { VideoItem } from '@/ui/video-item/VideoItem';

import { videoService } from '@/services/video.service';
import { Explore } from '@/app/(public)/explore/Explore';
import { Heading } from '@/ui/heading/Heading';

export default function Home() {
	const { data, isLoading } = useQuery({
		queryKey: ['trending'],
		queryFn: async () => {
			const response = await videoService.getTrendingVideos();
			return response.data;
		},
	});

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<section>
			<h2 className="hidden">Основные видео блоки</h2>
			<section className={'mb-3 pb-5 border-b-1 border-[var(--border-color)]'}>
				<Heading Icon={Flame}>
					Trending
				</Heading>
				<div className={'w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'}>
					{data &&
						data.map((video) => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={FlameIcon}
							/>
						))}
				</div>
			</section>
			<Explore />
		</section>
	);
}
