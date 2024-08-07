import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';
import EventStudy from './EventStudy';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />
      <hr />

      <EventStudy />
    </div>
  );
}

export default App;
