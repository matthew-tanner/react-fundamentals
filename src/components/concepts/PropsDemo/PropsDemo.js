import { useState } from "react";
import PropTypes from "prop-types";

const PropsDemo = () => {
  const [color, setColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("purple");
  const [borderRadius, setBorderRadius] = useState("5px");
  const [borderStyle, setBorderStyle] = useState("dashed");
  const [display, setDisplay] = useState("inline-block");
  const [width, setWidth] = useState("350px");
  const [textAlign, setTextAlign] = useState("center");

  let styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    display: display,
    width: width,
    textAlign: textAlign
  }

  const toggleColor = () => {
    color === "white" ? setColor("pink") : setColor("white");
  }

  return (
    <div className="main">
      <div className="mainDiv">
        <div style={styles}>
          <FunctionalComponent string="will this display?" function={toggleColor} selectedStyle={color} />
          <FunctionalComponent string="second one..." function={toggleColor}/>
          <FunctionalComponent string="third" function={toggleColor}/>
          <FunctionalComponent string="forth" function={toggleColor}/>
        </div>
      </div>
    </div>
  );
};

export default PropsDemo;

const TinyComponent = (props) => {
  return(
    <div>
      <p>The current style is : {props.selectedStyle}</p>
    </div>
  )
}

const FunctionalComponent = (props) => {
  return (
    <div>
      <p>{props.string}</p>
      <button onClick={props.function}>Press Me!</button>
      <TinyComponent selectedStyle={props.selectedStyle} />
    </div>
  );
};

FunctionalComponent.defaultProps = {
  string: "This is wild!",
  function: () => console.log("Can I see this in my dev tools..."),
  selectedStyle: "what style?"
}

FunctionalComponent.propsTypes = {
  string: PropTypes.string.isRequired,
  function: PropTypes.func.isRequired,
  selectedStyle: PropTypes.string.isRequired
}