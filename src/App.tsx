import "./App.css";
// import Lemojis from "../lib/Lemojis";
import Lemojis from "../dist/Lemojis";
function App() {
  return (
    <div className="App" data-theme="light">
      <Lemojis />
      {/*<Lemojis theme="light" searchAutoFocus />*/}
    </div>
  );
}

export default App;
