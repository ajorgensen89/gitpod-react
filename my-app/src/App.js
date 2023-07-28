// import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass'
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional'

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you" 
      name="Ava" cat="Bear" />
      <StatefulGreeting greeting="working prop" dude="dude" />
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
      <EventsFunctional />
      <EventsClass />
      <EventBinding />
      <ConditionalRenderingClass />  
      <ConditionalRenderingFunctional connected={true}/>
    </div>
    //PROP CONNECTED used to change in CRF.js
  );
}

export default App;
