import React, {createContext} from 'react';
import './App.css';
import ChildC from './components/ChildC';


const data = createContext();
const data1 = createContext();
const class1 = createContext();

function App() {
  const name ='Ahmad Raza Khokhar';
  const gender ='male';
  const age = 21 ;

  return (
    <div className="App">
     <data.Provider  value={name}>
      <data1.Provider value={gender}>
        <class1.Provider value={age}>

        <ChildC />

        </class1.Provider>
      </data1.Provider>
     </data.Provider>
    </div>
  );
}

export default App;
export {data, data1, class1};
