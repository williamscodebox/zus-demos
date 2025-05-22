import Test from "./components/Test";
import printProps from "./utils/printProps";

function App() {
  printProps(<Test />);
  return <div>App</div>;
}

export default App;
