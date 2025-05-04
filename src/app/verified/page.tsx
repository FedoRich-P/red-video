import { Check } from 'lucide-react';

export default function VerifiedUser() {
	return (
		<div className="flex flex-col items-center justify-center h-[70vh]">
			<h1 className="font-bold text-5xl flex items-end dap">
				<Check size={50} className={'text-green-700 mr-3'} /> Email was verified !
			</h1>
		</div>
	);
}
