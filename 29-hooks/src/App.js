import logo from './logo.svg';
import './App.css';
import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import Faq from './components/Faq';

function App() {
  useTitle('React Hooks 학습중!');
  return (
    <div className="App">
      <UseMemoEx />
      <hr /> 

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={9}/>
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
    </div>
  );
}

export default App;
