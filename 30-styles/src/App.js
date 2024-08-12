import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <h1>React Styling</h1>
        <hr />

        <CssModuleComponents />
        <hr />

        <SassComponent />
        <hr />

        <StyledComponent />
    </div>
  );
}

export default App;
