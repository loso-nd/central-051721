import Painting from './Painting';

// Material-UI Imports
import { TextField } from "@material-ui/core";
//import { Grid } from "@material-ui/core"

function PaintingsList(props) {
  return(
    <div>

      <TextField id="standard-basic" label="Standard" />

     {/* <Grid container spacing={10}> */}
        <h1>Paintings</h1>
        <hr />

          {
            props.paintings.map(painting => (
              // <Grid item xs={3}>
              <Painting
                key={painting.id}
                painting={painting}
              />
             // </Grid>
          ))
        }
    {/*  </Grid> */}
    </div>
  );
}

export default PaintingsList;
