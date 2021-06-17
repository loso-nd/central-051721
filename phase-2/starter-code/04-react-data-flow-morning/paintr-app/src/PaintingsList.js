import { useState } from 'react';
import Painting from './Painting';


function PaintingsList(props) {
  //set  state to Activitely keep track / categorize
  // paintings by number of votes

  // filteredList will be an ARRAY of PAINTING OBJECTS
  const [filteredList, setFilteredList] = useState(props.paintings)

  // Key: value
  // filteredList: props.paintings
  function filterPaintings(PaintingsList){
    //filter "paintingList"


    //use setFilteredList to assign final value to 'filteredList

    setFilteredList(filteredList)
  }
  
  return(
    <div>
      <h1>Paintings</h1>
      {
    //we can preplace
        filteredList.map(painting => (
          <Painting
            key={painting.id}
            painting={painting}
            setFilteredList={filterPaintings}

          />
        ))
      }
    </div>
  );
}

export default PaintingsList;
