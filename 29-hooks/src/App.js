import logo from './logo.svg';
import './App.css';
import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';

function App() {
  return (
    <div className="App">
      {/* <UseMemoEx />
      <hr /> */}

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={9}/>
    </div>
  );
}

export default App;
