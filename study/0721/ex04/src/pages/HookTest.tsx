import LayoutEffectExample from "../components/LayoutEffectExample";
import IdExample from "../components/IdExample";
import TransitionExample from "../components/TransitionExample";
import ParentComponent from "../components/ParentComponent";

function HookTest() {
	return (
		<div>
			<LayoutEffectExample />
			<IdExample />
			<TransitionExample />
			<ParentComponent />
		</div>
	);
}

export default HookTest;
