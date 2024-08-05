import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />
    </div>
  );
}

export default App;
