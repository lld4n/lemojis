import "./App.css";
import Lemojis from "../lib/Lemojis";
function App() {
  return (
    <div className="App" data-theme="light">
      <Lemojis theme="light" searchAutoFocus style="apple" />
    </div>
  );
}

export default App;
