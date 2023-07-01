import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import './App.scss';
import { Menu } from "./components/Menu";

const App: React.FC = () => {
  return (
    <div className="App" id="#top">
      <div>
        <Header />
        <Menu />
        <div style={{height: '1000px'}}>.</div>
      </div>
      <div className="App__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
