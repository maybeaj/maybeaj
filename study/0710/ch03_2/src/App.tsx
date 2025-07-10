import "./App.css";
import Tailwindcss from "./pages/Tailwindcss";
import TextsTest from "./pages/TextsTest";
import Color from "./pages/Color";
import "./index.css";

export default function App() {
	return (
		<div>
			<TextsTest />
			<Color />
			<Tailwindcss />
		</div>
	);
}
