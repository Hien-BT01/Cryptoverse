import "./App.css";
import Routes from "./routes";
import LayoutPage from "./components/Layout";

function App() {
  return (
    <div className="app">
      <LayoutPage>{Routes}</LayoutPage>
    </div>
  );
}

export default App;
