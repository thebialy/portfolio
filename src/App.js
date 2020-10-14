import React from "react";
import "./styles.css";
import Projects from "./classcomp/Project";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to Andrew Hitchcock's Portfolio </h1>
        <div className="container">
          <div className="project">
            <Projects
              name={"Ask Bill"}
              git={"https://github.com/thebialy/Ask-Bill"}
              live={"https://ask-bill-3ctnsup1w.vercel.app/"}
              img={"https://i.imgur.com/u3TUdjt.png"}
              alt={"ask-bill"}
            />
          </div>
          <div className="project">
            <Projects
              name={"myLouvre"}
              git={"https://github.com/thebialy/myLouvre"}
              live={"https://my-louvre.herokuapp.com/"}
              img={"https://i.imgur.com/pBZLlzF.jpg"}
              alt={"myLouvre"}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;