import './App.css';
import Counter from './Counter';
import CounterFunction from './CounterFunction';
import SayFunction from './SayFunction';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <CounterFunction value={"Plus 1"}/>
    </div>
  );
}

export default App;
