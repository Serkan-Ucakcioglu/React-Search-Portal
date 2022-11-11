import "./App.css";
import { useSelector } from "react-redux";
import { selectedData } from "./Features/dataSlice";

function App() {
  const data = useSelector(selectedData);

  return (
    <div className="App">
      <h1>hello</h1>
      <div></div>
    </div>
  );
}

export default App;
