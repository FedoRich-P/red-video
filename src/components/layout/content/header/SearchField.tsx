import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { PAGE } from '@/config/public-page.config';

export function SearchField() {
	const [searchTerm, setSearchTerm] = useState('');
	const router = useRouter();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchTerm.trim() !== '') {
			router.push(PAGE.SEARCH(searchTerm));
		}
		setSearchTerm('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="relative pl-5 w-3/12 border-b-1 border-[var(--border-color)]">
			<input
				type="search"
				placeholder="Type to search"
				className="py-2 px-4 w-full bg-transparent outline-none border-none shadow-none"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button
				type="submit"
				className="absolute left-2 top-1/2 translate-y-[-50%] opacity-60 cursor-pointer">
				<Search size={'20'} />
			</button>
		</form>
	);
}
