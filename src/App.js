import logo from './logo.svg';
import './App.css';
import react from 'react';
import './style.css'
import { EventData2 } from './event-data';
import RefsArray from './refs-array';
import StateFunc from './state-func';
import React from 'react';
import { userContext } from './context';
import Content2 from './context-content2';
import Header2 from './context-header2';



function App() {
  let [user, setUser] = React.useState('')
  return(
    <userContext.Provider value={[user, setUser]}>
      <Header2/>
      <Content2/>
    </userContext.Provider>
  )
}
export default App;