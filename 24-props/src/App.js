import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
        <ClassComponent />
        <ClassComponent name="SeSAC 6기"/>
        <hr />

        <FunctionComponent />
        <FunctionComponent name="SeSAC 6기"/>
        <hr />

        <Button link="https://www.google.com">Google</Button>
    </div>
  );
}

export default App;