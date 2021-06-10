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

  // Create function to toggle form (toggleForm)
  // ...

  // Create function to change Parent's "color" state (changeColor)
  // ...

  return (
    <div>
      <NavBar
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"

        // Pass changeColor() as prop to NavBar
        // ...
      />

      {/* Add toggleForm click behavior */}
      <button>Show/Hide New Painting Form</button>
      <hr />

      {/* Render PaintingForm or PaintingsList Components based upon toggleForm */}
      {/* ... */}
    
      <PaintingsList paintings={paintings} />
    </div>
  );
}

export default App;
