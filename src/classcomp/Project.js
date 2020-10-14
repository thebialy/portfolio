import React from "react";

class Projects extends React.Component {
  render() {
    return (
    <div>
      <fieldset>
        <legend> {this.props.name} </legend>
        <h3>
          <a target="_blank" href={this.props.git}>
            GitHub Page
          </a>
        </h3>
        <h3>
          <a target="_blank" href={this.props.live}>
            Live App
          </a>
        </h3>
        <img src={this.props.img} alt ={this.props.alt}/>
      </fieldset>
    </div>
    );
  }
}

export default Projects;
