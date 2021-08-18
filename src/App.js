// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Avii" about="Hero" />
      <div className="container my-4">
        <TextForm heading="Enter the text..." />
      </div>
    </>
  );
}

export default App;
