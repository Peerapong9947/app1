import logo from './logo.svg';
import './App.css';
import react from 'react';
import './style.css'
import { EventData2 } from './event-data';
import RefsArray from './refs-array';
import StateFunc from './state-func';
import { userContext } from './context';
import Content from './context-content';



function App() {
  return(
    <userContext.Provider value={'Tom Jerry'}>
      <Content/>
    </userContext.Provider>
  )
}
export default App;