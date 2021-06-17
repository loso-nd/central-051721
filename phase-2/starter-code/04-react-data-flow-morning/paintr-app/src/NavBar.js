function NavBar(props) {
  //console.log(props.changeColor("BLUE"))
   // props.changeColor("purple")

  return (
    <div className={`ui inverted ${props.color} menu`}>
      <a className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </a>

      {/* Call changeColor() via onClick using props */}
      <button onClick={() => props.changeColor("blue")}>Change Color</button>
      <br></br>
      <label for="paintings">Filter</label>
        <select class="ui right" name="paintings" id="paintings" form="paintingform">
          <option value="all">All</option>
          <option value="votes">Votes</option>
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
    </div>
  );
};

export default NavBar;
