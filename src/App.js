import React,  { useState } from 'react';
import Form from './components/Form';
import DisplayForm from './components/DisplayForm';
import BoxColor from './components/BoxColor';


const App = () => {

  const [boxList, setBoxList] = useState([])
  const recieveBox = (newBox) => {
    setBoxList([...boxList, newBox])
  }

  //  const handleAddedBox = (e) => {
  //    e.preventDefault();
  //   props.handleAddedBox(box);
  //   setBox("");
  // };
  
  return (
    <div className="App">
      <Form handleAddedBox={recieveBox } />
      <DisplayForm boxList={boxList} />
    </div>
  );
}

export default App;
