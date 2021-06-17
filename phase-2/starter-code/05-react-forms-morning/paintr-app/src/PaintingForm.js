import React, { useState} from 'react'
//import useState hook to init our states and make them re-settable


function PaintingForm (){

    //create a state to keep track of ImgURL
    //const [stateName, setterMethod] = useState(initStateValue)

    const [imgUrl, imgUrlSetter] = useState(" ");
    const [title, titleSetter] = useState(" ");
    const [artistName, artistNameSetter] = useState(" ");

    console.log(`current state:, ${imgUrl}` )

    //create a cb func that will trigger updates to our imgUrl state as we make changes to our "ImgURL" input
    function handleImgUrl(e) {
        // event => onChange, keystroke changes
        // target => where the event takes place, <input>
        // value => what exists inside the <input> that the onChange was fired
  
        // passing the input value at the time of the onChange event to be our new imgUrl state
        imgUrlSetter(e.target.value)

        console.log("After imgUrlSetter: ", imgUrl)
    }

    function handleChange(e){
        titleSetter(e.target.value)
        artistNameSetter(e.target.value)

        console.log(`After setterMethods: , ${titleSetter}, ${artistName} `)
    }
return(
    <div>
        <h1> Add a new Painting</h1>

        {/* Uncontrolled form / inputs - Not tracking the form via state */}
        <form>
            <input
                type="text" 
                placeholder="ImgURL"
                value={imgUrl.value}
                onChange={handleImgUrl} /> <br/>
            <input 
                type="text" 
                placeholder="Title"
                onChange={handleChange} /><br/>
            <input 
                type="text" 
                placeholder="Artist Name"
                onChange={handleChange} /><br/>
            <input type="text" placeholder="date"/><br/>
            <input type="text" placeholder="width"/><br/>
            <input type="text" placeholder="height"/><br/>

            <input type="submit" value="add new painting"/>
        </form>
    </div>)
}

export default PaintingForm
