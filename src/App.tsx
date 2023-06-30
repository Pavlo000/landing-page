import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
