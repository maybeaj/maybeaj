import Clock from "./pages/Clock";
import { useState, useRef, useEffect } from "react";
import { useClock } from "./hooks";

export default function App() {
	// //let today = useRef(new Date());
	// const [today, setToday] = useState(new Date());
	// useEffect(() => {
	// 	console.log('useEffect called');
	// 	const duration = 1000; // 1 second
	// 	const id = setInterval(() => {
	// 		//today.current = new Date();
	// 		//console.log('today', today.current.toLocaleTimeString());
	// 		setToday(new Date())
	// 	}, duration);
	// 	return () => clearInterval(id);
	// }, []);

	// return (
	// 	// <Clock today={today.current} />
	// 	<Clock today={today} />
	// );

	// Using the custom hook
	// const today = useClock();
	// return <Clock today={today} />;

	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);

	return (
		<div>
			<h2>{"덧셈기"}</h2>
			<div className="flex flex-row items-center">
				<input
					type="number"
					value={number1}
					onChange={(e) => setNumber1(Number(e.target.value))}
				/>
				<span>{"+"}</span>
				<input
					type="number"
					value={number2}
					onChange={(e) => setNumber2(Number(e.target.value))}
				/>
			</div>
		<p>{`덧셈 결과는: ${number1} + ${number2} = ${number1 + number2}입니다.`}</p>
			<br />
		</div>
	);
}
