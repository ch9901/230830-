import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const name = "Ava";
  const location = "강남구";
  return (
    <div className="App">
      <Header />
      <Body name={name} location={location} />
      <Footer />
    </div>
  );
}

export default App;
