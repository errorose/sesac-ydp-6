// import logo from './logo.svg';
import './App.css';
import AnimalComponent from './Animal';
import TrueFalseComponent from './TrueFalse';

function App() {

  return (
      <div className="App">
        <AnimalComponent name='쿠로미' animal='고양이'/>
        <TrueFalseComponent />
      </div>
  );
}

export default App;
