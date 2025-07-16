import GreetingPage from "./pages/GreetingPage";
import ProductListPage from "./pages/ProductListPage";
import ApplyScrapPage from "./pages/ApplyScrapPage";
import QuotationPage from "./pages/QuotationPage";
import ScrapCompletePage from "./pages/ScrapCompletePage";
import { useState } from "react";

function App() {
	const [stage, setStage] = useState(1);

	const prevStage = () => {
		setStage(stage - 1);
	};

	const nextStage = () => {
		setStage(stage + 1);
	};

	return (
		<div className="container p-4 mx-auto text-center">
			<button
				className="px-4 py-2 m-2 text-white bg-blue-500 rounded"
				onClick={prevStage}
			>
				이전
			</button>
			<button
				className="px-4 py-2 text-white bg-blue-500 rounded"
				onClick={nextStage}
			>
				다음
			</button>
			<br />

			<span className="font-bold">{stage}단계</span>

			{stage === 1 && <GreetingPage />}
			{stage === 2 && <ApplyScrapPage />}
			{stage === 3 && <QuotationPage />}
			{stage === 4 && <ScrapCompletePage />}
		</div>
	);
}

export default App;
