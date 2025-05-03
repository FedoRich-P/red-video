'use client';

import { useQuery } from '@tanstack/react-query';

import { VideoItem } from '@/ui/video-item/VideoItem';

import { videoService } from '@/services/video.service';
import { IVideo } from '@/types/video.types';
import { Heading } from '@/ui/heading/Heading';
import { Compass } from 'lucide-react';
import { SkeletonLoader } from '@/ui/skeleton-loader/SkeletonLoader';

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: async () => {
			const response = await videoService.getExploreVideos();
			return response.data;
		},
	});

	return (
		<section>
			<Heading Icon={Compass}>
				Explore
			</Heading>
			<div className={'w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'}>
				{isLoading && <SkeletonLoader count={6} className={'h-36 rounded-md'}/>}
				{data &&
					data.videos.map((video: IVideo) => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))}
			</div>
		</section>
	);
}
