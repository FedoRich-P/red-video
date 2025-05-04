import Link, { LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type TLink = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends TLink {
	children: ReactNode;
}

export function LinkButton({ children, ...props }: Props) {
	return (
		<Link
			className="py-2 px-5 flex items-center gap-3 bg-[var(--primary-color)] text-white font-semibold rounded hover:bg-red-400 transition-colors disabled:bg-gray-400"
			{...props}>
			{children}
		</Link>
	);
}