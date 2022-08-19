import GameScreen from './components/GameScreen';
import MainArea from './components/MainArea';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GameScreen />
      <MainArea />
    </div>
  );
}

export default App;
