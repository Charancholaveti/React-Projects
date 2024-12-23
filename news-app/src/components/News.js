import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country:"us",
    pageSize:4,
    category:"general"
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1
        }
        document.title=`Newzify-${this.capitalize(this.props.category)}`;
    }
    async updateNews(pageNo){
      this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b96845ff01864c6b8148df77c47c5e78&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data= await fetch(url);
      this.props.setProgress(30);
      let parsedData=await data.json();
      this.props.setProgress(70);
      this.setState({
        articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      });
      this.props.setProgress(100);
   }
    async componentDidMount(){
      this.updateNews();
    }
    handlePrevClick= async()=>{
      this.setState({page:this.state.page-1});
      this.updateNews();
    }
    handleNextClick= async()=>{
      this.setState({page:this.state.page+1});
      this.updateNews();
    }
  render() {
    return (
      <div className='container my-2'>
        <center><h2 className="text-center" style={{padding: '15px 10px',color:'black',margin:'15px 0px'}}>Newzify-Top Headlines in {this.capitalize(this.props.category)}</h2></center>
        {this.state.loading && <Spinner/>}
        <div className="row">
             {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-3" key={element.url}>
                  <NewsItem title={element.title?element.title.slice(0,90):""} description={element.description?element.description.slice(0,30):""} imageUrl={element.urlToImage} 
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
            })}
        </div>  
        <div className="container d-flex justify-content-around">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
