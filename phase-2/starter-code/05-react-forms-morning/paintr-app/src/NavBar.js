function NavBar(props) {
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <a className="item" href="./">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </a>

      {/* Call changeColor() via onClick using props */}

      {/* WRONG WAY - Passing in RETURN of a function */}
      {/* <button onClick={props.changeColor("purple")}>Change Color</button> */}
      
      {/* RIGHT WAY - Passing in an ENTIRE function (callback) */}
      {/* <button onClick={() => props.changeColor("purple")}>
        Change Color
      </button> */}
    </div>
  );
};

export default NavBar;

// () => props.changeColor("purple")

// function() {
//    props.changeColor("purple") 
// }