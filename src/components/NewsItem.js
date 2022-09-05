import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/F6A0/production/_126263136_gettyimages-591394853.jpg":imageUrl} className="card-img-top" alt="" ></img>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className="text-muted">By {!author?'Unknown' :author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="-blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem