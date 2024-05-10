import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  return (
    <div className="App">
      <div className='army '>
        <YourBotArmy/>
      </div>

      <div className='collection'>
        <BotCollection/>
      </div>
    </div>
  );
}

export default App;
