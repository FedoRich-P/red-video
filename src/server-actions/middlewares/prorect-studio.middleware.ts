import { type NextRequest, NextResponse } from 'next/server'

import { getTokensFromRequest } from './utils/get-tokens-from-request'
import { jwtVerifyServer } from './utils/jwt-verify'
import { redirectToLogin } from './utils/redirect-to-login'

export async function protectStudio(request: NextRequest) {
	const tokens = await getTokensFromRequest(request)

	// Нет accessToken и refreshToken — редирект
	if (!tokens?.accessToken && !tokens?.refreshToken) {
		return redirectToLogin(request)
	}

	// accessToken есть — проверим его
	if (tokens.accessToken) {
		const verifiedData = await jwtVerifyServer(tokens.accessToken)
		if (verifiedData) {
			return NextResponse.next()
		}
	}

	//  accessToken невалидный, но refreshToken есть — пустим, а клиент обновит
	if (tokens.refreshToken) {
		return NextResponse.next()
	}

	//  Вообще ничего нет
	return redirectToLogin(request)
}
