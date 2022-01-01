import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      {/* Sidebar
      Feedbar
      Widgets */}
      <div className="app-body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
