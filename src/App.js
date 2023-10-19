import { isWhiteSpaceLike } from "typescript";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
