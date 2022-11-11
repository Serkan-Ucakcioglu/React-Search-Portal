import "./App.css";
import { useSelector } from "react-redux";
import { dataSelect } from "./features/dataSlice";

function App() {
  const data = useSelector(dataSelect);
  console.log(data);

  return (
    <div className="App">
      <h1>hello</h1>
      <div></div>
    </div>
  );
}

export default App;
