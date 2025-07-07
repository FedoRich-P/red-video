import { Settings } from 'lucide-react'
import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { SettingsForm } from './SettingsForm'
import {Heading} from "@/ui/heading/Heading";

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return (
		<div>
			<Heading
				Icon={Settings}
				isPageHeading
			>
				Settings
			</Heading>

			<SettingsForm />
		</div>
	)
}
