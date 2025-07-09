//import "./App.css";
//import EventListner from './pages/EventListner';
import ReactOnClick from './pages/ReactOnClick'
import EventBubbling from './pages/EventBubbling';
import FileInput from './pages/FileInput';
import DragDrop from './pages/DragDrop';


// function App() {
// 	//const texts = [<p key="1">hello</p>, <p key="2">world</p>]; // key 속성
// 	// const texts = ["hello", "world"].map((text, index) => (
// 	// 	<p key={index}>{text}</p>
// 	// ));
// 	const texts = ["hello", "world"].map((text, index) => (
// 		<p key={index} children={text} />
// 	));
// 	return <div children={texts}/>;
// }
// export default App;

export default function App() {
  return (
    <div>
      <ReactOnClick />
      <EventBubbling />
      <FileInput />
      <DragDrop />
    </div>
  );
}