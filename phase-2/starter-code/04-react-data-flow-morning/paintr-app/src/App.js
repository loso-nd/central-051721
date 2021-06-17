// https://semantic-ui.com/
import 'semantic-ui-css/semantic.min.css';

// import all data from "painting_data.js"
import paintingsData from './painting_data'

// import useState Hook
import React, { useState } from 'react';

// Compontent Imports
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import PaintingForm from './PaintingForm'

function App() {

  // Initialize "color", "paintings", and "formView" states
  const [color, colorSetter] = useState("red");
  const [paintings, paintingsSetter] = useState(paintingsData);
  const [formView, formViewSetter] = useState(false);

  // Create function to change Parent's "color" state (changeColor)
  // This is invoking our colorSetter method which is changing our state of our color
    function changeColor(newColor){
      colorSetter(newColor);
    }

  {/* Breakout Activity #1: Render PaintingForm or PaintingsList Components based upon toggleForm */}
    function toggleForm(){
      console.log(formView)
      console.log("Where are you at playa")
      formViewSetter(!formView)
    }

  // Breakout Activity #1: Create Function to Toggle Between PaintingForm / PaintingsList (toggleForm)
  // ...

  return (
    <div>
      <NavBar
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"

        // Pass changeColor() as prop to NavBar
        //changeColor={colorSetter} //this works as well if you wanted to directly change the color one time
        //This method allows us to extrapolate our code into a function execute the code above and do more
        changeColor={changeColor}
      />


      {/* Add toggleForm click behavior */}
      <button onClick={() => toggleForm()}>Show/Hide New Painting Form</button>
      <hr />
    
      {formView ? <PaintingForm /> :<PaintingsList paintings={paintings}/> }
    </div>
  );
}

export default App;
