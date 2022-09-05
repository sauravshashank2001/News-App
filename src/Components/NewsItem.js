import React, { Component } from 'react'

{/* Class Based Components */}

{/*

export class NewsItem extends Component {
  
  
//creating the news card for eaxh news recieved from api
  render() {
    //deconstruction title, desc, imageUrl to use in the card
    const { title, description, imageUrl,newsUrl, author, date} =this.props;
    return (
      <div>
         <div className="card my-3" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
*/}



/* Function based components */



const NewsItem = (props) => { 
  
  
  //creating the news card for eaxh news recieved from api

      //deconstruction title, desc, imageUrl to use in the card
      const { title, description, imageUrl,newsUrl, author, date} =props;
      return (
        <div>
           <div className="card my-3" >
              <img src={imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                  <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
              </div>
            </div>
        </div>
      )
  }
  
  export default NewsItem
  