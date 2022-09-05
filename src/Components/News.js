import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



/* Function based Components */


const News= (props)=>{
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)



  
 


  const updateNews = async () =>{
    setLoading(true)
//let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=c6544546b33f4fb0874a4b965ce1cb54&page=1&pageSize=${props.pageSize}`;
    let url = `https://newsapi.in/newsapi/news.javascript?key=1mw2ztTHa47r1FeySTXf0aNpQsNf3e&category={props.category}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false)
    setArticles( parsedData.articles )
    setTotalResults( parsedData.totalResults )
   
  }



  //  handling the  to go to component did mount to run after render to fetch api for first page  

  useEffect (()=> {
    updateNews();
    document.title = `${props.category}-News Monkey`;
  }, [])


  const fetchMoreData =async()=>{
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=c6544546b33f4fb0874a4b965ce1cb54&page=1&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }

    return (
      <div className='container my-3'> 
        <h1 className="text-center" style={{ margin: '40px 0px', marginTop:"90px" }}>NewsMonkey - Top {props.category} Hadlines</h1>
        {loading && <Spinner/>}

        {/*  looping on the api's data array and passing diff title and image url and calling the News item to create card with it*/}
       
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          inverse={true} //
          hasMore={articles.length !== totalResults}
          //loader={<Spinner/>}
          scrollableTarget="scrollableDiv"
        >
          <div className="container">
          <div className="row">
            {/*!this.state.loading &&*/articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>

          </div>
         
        </InfiniteScroll>

        {/* Creating previous and next button and adding disable property wherever required */}

        {/* <div className="container d-flex justify-content-between">

          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>

        </div> */}

      </div>
    )
  




// News.defaultProps = {
//   country: 'in',
//   pageSize: 8,
//   category: 'general',
// }

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// }















/**class BASED COMPONENTS */


{/*export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${props.category}-News Monkey`;
  }


  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=c6544546b33f4fb0874a4b965ce1cb54&page=1&pageSize=${props.pageSize}`;
    { this.setState({ loading: true }) }
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
  }



  {/*  handling the  to go to component did mount to run after render to fetch api for first page  */}

  {/*
   componentDidMount = async () => {
    this.updateNews();
  }
*/}
  {/*  handling the next button to go to previous page by updating the api  */}

 
  // handlePrevClick = async () => {


  //   this.setState({ page: this.state.page - 1, })
  //   this.updateNews();

  // }

  {/*  handling the next button to go to next page by updating the api  */} 
  // handleNextClick = async () => {


  //   this.setState({
  //     page: this.state.page + 1,
  //   })
  //   this.updateNews();
  

{/**

  fetchMoreData =async()=>{
    this.setState({page: this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=c6544546b33f4fb0874a4b965ce1cb54&page=1&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  }

  render() {
    return (
      <div className='container my-3'> 
        <h1 className="text-center" style={{ margin: '40px 0px' }}>NewsMonkey - Top {props.category} Hadlines</h1>
        {this.state.loading && <Spinner/>}

 */}       

        {/*  looping on the api's data array and passing diff title and image url and calling the News item to create card with it*/}
       
  {/* 
    <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          inverse={true} //
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          scrollableTarget="scrollableDiv"
        >
          <div className="container">
          <div className="row">
  */}/*!this.state.loading &&*/
      
  
  // {this.state.articles.map((element) => {
  //             return <div className="col-md-4" key={element.url}>
  //               <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage}
  //                 newsUrl={element.url} author={element.author} date={element.publishedAt} />
  //             </div>
  //           })}
  //         </div>

  //         </div>
         
  //       </InfiniteScroll>

}
  export default News;