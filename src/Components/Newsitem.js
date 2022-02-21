import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class Newsitem extends Component {
    
    constructor(){
        super();
        console.log("Hello , I am a constructor from News component");
       
    }
  render() {
     let {title , description , imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src= {!imgUrl?"https://imgk.timesnownews.com/story/iStock-1174175318_1_0.jpg?tr=w-560,h-292,fo-top":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
