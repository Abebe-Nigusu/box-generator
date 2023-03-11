import React, { useState } from "react";

const Form = (props) => {
  const [box, setBox] = useState("");
  // const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddedBox(box);
    setBox("");
  };

  // const handleColorChange = (e) => {
  //   e.preventDefault();
  //   props.handleAddedColor(color);
  //   setColor("");;
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Box Generator:</h3>
        <label>Color</label>              
        <input
          type="text"
          name="color"
          onChange={(e) => setBox(e.target.value)}
          value={box}
        />
        <input type="submit" value="Add" />            
      </form>
    </div>
  );
};

export default Form;
