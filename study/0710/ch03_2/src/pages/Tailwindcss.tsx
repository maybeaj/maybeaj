import * as D from "../data";

export default function Tailwindcss() {
	return (
		<div className="bg-black/70">
			<p className="w-full p-4 text-3xl text-white">Tailwindcss</p>
			<p className="italic text-gray-50 line-clamp-3">
				{D.randomParagraphs(10)}
			</p>
			<div className="text-4xl font-bold text-red-500 p-4">Tailwind?</div>
			<button className="btn btn-primary">Daisy?</button>
			<button className="btn btn-primary" style={{ textTransform: "none" }}>
				Button
			</button>
            
		</div>
        
	);
}
