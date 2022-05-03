import React, { Component } from 'react'
import icon from './icon.png'
export class NewsItems extends Component {
 
  render() {
    let {title, description, imgUrl, newsUrl, author, date} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imgUrl?"https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png":imgUrl} className="card-img-top" alt="NEWS image" style={{height: 12 +'rem'}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">Read More <span><img src={icon} style={{width: 20 +'px',verticalAlign: 'bottom'}}/></span></a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
