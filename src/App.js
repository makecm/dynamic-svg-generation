import PropTypes from "prop-types";
import './App.css';

function App({ text }) {
  return (
    <div className="App"> <div className="blob">{text} </div></div>
  );
}

App.propTypes = { text: PropTypes.string,}
App.defaultProps = { text: 'Your Custom SVG',}
export default App;


// some quick messing around

function rMe(min, max) { return Math.floor(Math.random() * (max - min + 1) + min);}
let blob = document.querySelector("div");
function randomBlob() { blob.setAttribute("style", `transform:rotate(${rMe(-9, 9)}deg);` ) }
randomBlob();