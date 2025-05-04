import type { NextRequest, NextResponse } from 'next/server'

import { PAGE } from './config/public-page.config'
import { STUDIO_PAGE } from './config/studio-page'
import { protectStudio } from '@/server-actions/middlewares/prorect-studio.middleware';
import { protectLoginPages } from '@/server-actions/middlewares/prorect-login.middleware';


export async function middleware(request: NextRequest, response: NextResponse) {
	const url = new URL(request.url)
	const pathname = url.pathname

	if (pathname.includes(STUDIO_PAGE.HOME)) {
		return protectStudio(request)
	}

	if (pathname.includes(PAGE.AUTH)) {
		return protectLoginPages(request)
	}
}

export const config = {
	matcher: ['/studio/:path*', '/auth/:path*']
}
