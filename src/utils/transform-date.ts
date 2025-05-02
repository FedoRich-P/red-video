import dayjs from 'dayjs'
import relativeDate from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeDate)

export function transformDate(createdAt: string): string {
	return dayjs(createdAt).fromNow()
}

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:FedoRich-P/red-video.git
git push -u origin main