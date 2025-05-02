'use client';

import { useQuery } from '@tanstack/react-query';
import { FlameIcon } from 'lucide-react';

import { VideoItem } from '@/ui/video-item/VideoItem';

import { videoService } from '@/services/video.service';
import { IVideo } from '@/types/video.types';

export default function Home() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos(),
	});

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<>
			{data?.data &&
				data.data.videos.map((video: IVideo) => (
					<VideoItem
						key={video.id}
						video={video}
						Icon={FlameIcon}
					/>
				))}
		</>
	);
}
