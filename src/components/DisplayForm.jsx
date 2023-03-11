import React from "react";

const FormDisplay = (props) => {
  const boxStyle = {
    height: "100px",
    width: "100px",
  };
  const displayBox = {
    display: "flex",
    padding: "30px",
    flexFlow: "row wrap",
  };

  return (
    <div style={displayBox}>
      {props.boxList.map((eachBox, idx) => {
        return (
          <pre
            key={idx}
            style={{
              ...boxStyle,
              margin: "8px",
              backgroundColor: eachBox,
            }}
          >
            {/* {eachBox} */}
          </pre>
        );
      })}
    </div>
  );
};

export default FormDisplay;
