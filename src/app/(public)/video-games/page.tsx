import { Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { VideoItem } from '@/ui/video-item/VideoItem'

import { PAGE } from '@/config/public-page.config'
import {Heading} from "@/ui/heading/Heading";
import {videoService} from "@/services/video.service";


export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Video games',
	description: 'Best game`s videos.',
	alternates: {
		canonical: PAGE.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PAGE.VIDEO_GAMES,
		title: 'Video games'
	}
}

export default async function VideoGamesPage() {
	const videos = await videoService.getVideoGames()

	return (
		<section>
			<Heading Icon={Gamepad2}>Video games</Heading>
			<div className={'w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'}>
				{videos.data.length ? (
					videos?.data?.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<div>Video games are temporarily unavailable</div>
				)}
			</div>
		</section>
	)
}
