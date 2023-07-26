// import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you" 
      name="Ava" cat="Bear" />
      <StatefulGreeting greeting="working prop" dude="dude" />
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
