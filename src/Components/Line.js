import { useState } from "react";

const Line = ({element}) => {
    const [hoverLine, setHoverLine] = useState(false);
    return (
    <div className="Line"
    // voir la doc sur les "mouse events"
    // https://fr.reactjs.org/docs/events.html#mouse-events
    onMouseEnter={() => { 
      setHoverLine(true);
    }}
    onMouseLeave={() => { 
      setHoverLine(false);
    }}
    onClick={() => {
      navigator.clipboard.writeText(element.symbol);
      // Google : react copy to clipboard
      // https://stackoverflow.com/a/52033479
    }}
  >
    <p> {element.symbol} </p> 
    <p> {element.title} </p>
   
    {hoverLine && <p className="Copy-span">Click to copy !</p>}
  </div>
  )
}

export default Line;