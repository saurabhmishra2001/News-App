import { ClosedCaptionDisabledSharp } from '@mui/icons-material';
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
    constructor(){
        super();
        console.log('News Component Constructor')
        this.state={
            articles:[],
            loading:false
           
           
        }
    }
    async componentDidMount(){
        console.log('News Component Did Mount')
        let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c39226d480ac4f7ebab08e04e6fbcabf';
        
        let data=await fetch(url)
        let parsedData=await data.json()
            console.log(parsedData);
            this.setState({articles:parsedData.articles})
    }
    handlePrevClick=()=>{
        console.log('Prev Clicked')
    }
    handleNextClick=()=>{
        console.log('Next Clicked');
        this.setState({
            
        })
    }


  render() {
    return (
            <div className='container my-3 '>
              <h2>Picture News -Top Headlines</h2>
              <div className='row'>
                 {this.state.articles.map((element)=> {
                    return <div className='col md-4'  key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 45): ""} description ={element.description?element.description:" "} imageUrl={element.urlToImage} className="card-img-top" 
                            alt="This is Picture Image" newsUrl={element.url}/>
                    </div>
               
                    } )}    
                </div>
                <div className="container d-flex justify-content-between">
                    <button className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
            </div>
        );
    } 
}  
        
 

export default News