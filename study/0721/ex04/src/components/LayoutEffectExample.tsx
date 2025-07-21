import React, { useLayoutEffect, useRef } from "react";

function LayoutEffectExample() {
	const boxRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (boxRef.current) {
			boxRef.current.style.background = "yellow";
			boxRef.current.style.width = "200px";
		}
	}, []);

	return (
		<div>
			<div ref={boxRef}>useLayoutEffect로 스타일적용</div>
		</div>
	);
}
export default LayoutEffectExample;
