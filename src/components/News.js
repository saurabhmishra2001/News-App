//import { ClosedCaptionDisabledSharp } from '@mui/icons-material';
import React, { Component } from 'react'
import Spinner from './Spinner'
import NewsItem from './NewsItem'

export class News extends Component {
 
    constructor(){
        super();
        console.log('News Component Constructor')
        this.state={
            articles:[],
            loading:false,
            page:1
           
         }
    }
    async componentDidMount(){
        console.log('News Component Did Mount')
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url)
        let parsedData=await data.json()
            console.log(parsedData);
            this.setState({articles:parsedData.articles, 
                totalResults:parsedData.totalResults,
                loading:false});
    }
    handlePrevClick=async()=>{
        console.log('Prev Clicked')
  
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url)
        let parsedData=await data.json()
            console.log(parsedData);
          
        this.setState({
            page:this.state.page - 1,
            articles:parsedData.articles,
            loading:false
            })
    
        }
    handleNextClick=async()=>{
        console.log('Next Clicked');
        if(! this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url)
        let parsedData=await data.json()
                      
        this.setState({
            page:this.state.page + 1,
            articles:parsedData.articles,
            loading:false
            })
        }
    }


  render() {
    return (
            <div className='container my-3 '>
                <h2 className='text-center'>Picture News -Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                 {!this.state.loading && this.state.articles.map((element)=> {
                    return <div className='col md-4'  key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 45): ""} description ={element.description?element.description:" "} imageUrl={element.urlToImage} className="card-img-top" 
                            alt="This is Picture Image" newsUrl={element.url}/>
                    </div>
               
                    } )}    
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
            </div>
        );
    } 
}  
export default News