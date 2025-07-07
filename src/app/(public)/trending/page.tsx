import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { VideoItem } from '@/ui/video-item/VideoItem'

import { PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'
import {Heading} from "@/ui/heading/Heading";

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Best videos in trends.',
	alternates: {
		canonical: PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PAGE.TRENDING,
		title: 'Trending'
	}
}

export default async function TrendingPage() {
	const videos = await videoService.getTrendingVideos()

	return (
		<section>
			<Heading Icon={Flame}>Trending</Heading>
			<div className={'w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'}>
				{videos.data.length ? (
					videos.data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<div>Trends are temporarily unavailable</div>
				)}
			</div>
		</section>
	)
}
