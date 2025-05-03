'use client';

import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Heading } from '@/ui/heading/Heading';
import { SkeletonLoader } from '@/ui/skeleton-loader/SkeletonLoader';
import { VideoItem } from '@/ui/video-item/VideoItem';

import { videoService } from '@/services/video.service';

export function SearchPage() {
	const searchParams = useSearchParams();

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchParams.get('term')],
		queryFn: async () => {
			const result = await videoService.getAll(searchParams.get('term'))
			return result.data;
		},
	});

	console.log(data?.videos);

	return (
		<section>
			<Heading
				isH1
				Icon={Search}>
				Search &quot;{searchParams.get('term')}&quot;
			</Heading>
			<div className='w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className="h-36 rounded-md"
					/>
				) : data ? (
					data.videos.map((video) => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<p>Videos not found!</p>
				)}
			</div>
		</section>
	);
}
