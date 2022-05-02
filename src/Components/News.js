import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class NEWS extends Component {
  
  static defaultProps = {
    country : 'in',
    pageSize : 6,
    category : 'sports'
  }
  static defaultPropTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page : 1  
    }
  }
  async componentDidMount() {
    this.updateNews();
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8159b94e5d284980ac63cd3c563a580d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles,
       totalResults : parsedData.totalResults,
        loading : false});
  }
  previousPage = async ()=>{
    await this.setState({page : this.state.page - 1});
    this.updateNews();
  }
  nextPage = async ()=>{
    await this.setState({page : this.state.page + 1});
    this.updateNews();
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin : "20px 0px"}}>News Master - Head Lines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                  <NewsItems  title={element.title?element.title:""} description={element.description?element.description:""}  imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousPage}> &larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextPage}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default NEWS
