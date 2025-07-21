import React, { useId, useState } from "react"; 

export default function IdExample() {
	const id = useId();
	const [name, setName] = useState("");

	return (
		<div>
			<label htmlFor={id}>id: {id} Name: {name}</label>
			<input id={id} type="text" value={name} onChange={(e) => setName(e.target.value)} />
		</div>
	);
}
