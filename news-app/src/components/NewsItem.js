import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{height: "400px",display: "flex",flexDirection: "column",}}>
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className="badge rounded-pill bg-danger"style={{left:'90%',zIndex:'1'}}>{source}</span>
          </div>
            <img style={{height: "150px",width: "100%",objectFit: "cover", }}src={imageUrl?imageUrl:'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/11/chatgpt-macos-mac-apps.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1'} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                {/* <p className="card-text">{description}...</p> */}
                <p className="card-text"><small className='text-danger'>By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
