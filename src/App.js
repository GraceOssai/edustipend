import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      <Hero 
      />
    </div>
  );
}

export default App;
