import './App.css';
import Page from './components/page';
import SomeClassComponent from './components/someclasscomponent';

function App() {
  return (
    <div className="App">
      <Page/>
      <SomeClassComponent someText="test1" someNumber={ 67 } firstName="Jane" lastName="Doe"/>
      <SomeClassComponent someText="test2" someNumber={ 54 } firstName="Todd" lastName="Baker"/>
    </div>
  );
}

export default App;
