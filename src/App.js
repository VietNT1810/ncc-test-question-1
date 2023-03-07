import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page-content">
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
