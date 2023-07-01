import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import './App.scss';
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

const App: React.FC = () => {
  return (
    <div className="App" id="#top">
      <div className="App__top-content">
        <Header />
        <Menu />
        <main className="App__main container-xl">
          <About />
          <Projects />
        </main>
      </div>
      <div className="App__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
