import { useRef } from "react";

export default function MyComponent() {
	const inputRef = useRef<HTMLInputElement>(null);

	const focusInput = () => {
			inputRef.current?.focus();
		
	};

	return (
		<div className="p-4 m-4 border border-gray-300">
			<input ref={inputRef} className="border border-blue-300" type="text" />
			<button onClick={focusInput} className="px-4 py-2 text-white bg-green-300 rounded">
				포커스 주기
			</button>
		</div>
	);
}
