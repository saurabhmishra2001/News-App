import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description}=this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
      <img src="https://assets1.cbsnewsstatic.com/hub/i/r/2022/08/07/13b85e18-cd47-4701-84bd-b221b140f3af/thumbnail/1200x630/a260f0ac37d6886125c719302cb69eeb/gettyimages-1242335423.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </>
    )
  }
}

export default NewsItem