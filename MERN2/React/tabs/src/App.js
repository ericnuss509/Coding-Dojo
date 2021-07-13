import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';
import Display from './components/Display'

function App() {
  const [tabs, setTabs] = useState()

  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs={setTabs}/>
      <Display tabs={tabs}/>
    </div>
  );
}

export default App;
