import {useState} from 'react';
import './styles/Box.css';

function App() {
  const [number, setNumber] = useState(100);
  const plus = () => setNumber(number + 1);
  const minus = () => setNumber(number - 1);
  return (
    <div className="App">
      <h1>React Redux</h1>
      <h2>Redux를 사용하지 않을 때 Props 전달</h2>
      <Box1 number={number} plus={plus} minus={minus}/>
    </div>
  );
}

export default App;

// Box1 컴포넌트
const Box1 = ({number, plus, minus}) => {
  return (
    <div className="Box">
      <h2>Box1 : {number}</h2>
      <Box2 number={number} plus={plus} minus={minus}/>
    </div>
  );
}

// Box2 컴포넌트
const Box2 = ({number, plus, minus}) => {
  return (
    <div className="Box2">
      <h2>Box2 : </h2>
      <Box3 number={number} plus={plus} minus={minus}/>
    </div>
  );
}

// Box3 컴포넌트
const Box3 = ({number, plus, minus}) => {
  return (
    <div className="Box3">
      <h2>Box3 : </h2>
      <Box4 number={number} plus={plus} minus={minus}/>
    </div>
  );
}

// Box4 컴포넌트
const Box4 = ({number, plus, minus}) => {
  return (
    <div className="Box4">
      <h2>Box4 : {number}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}
