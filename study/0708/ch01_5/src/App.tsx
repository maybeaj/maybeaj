// import * as D from "./data";
import { Component } from "react";
import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";
import OnClick from "./pages/onClick";
// export default class App extends Component {
// 	render() {
// 		return (
// 			<ul>
// 				<ClassComponent href="http://www.google.com" text="go to Google"/>
// 				<ClassComponent href="https://twitter.com/" text="go to Twitter"/>
// 			</ul>
// 		);
// 	}
// }

// export default function App() {
//   return <h1>function component</h1>
// }

// 화살표 방식 함수 컴포넌트
// const App = () => {
//   return <h1>function component</h1>
// }

// export default App;

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to Google"/>
      <ArrowComponent href="https://twitter.com" text="go to twitter"/>
      <OnClick/>
    </ul>
  );
}