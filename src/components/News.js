//import { ClosedCaptionDisabledSharp } from '@mui/icons-material';
import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("News Component Constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalize(this.props.category)}-Picture News`;
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async updateNews(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();

    // console.log('News Component Did Mount')
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data=await fetch(url)
    // let parsedData=await data.json()
    //     console.log(parsedData);
    //     this.setState({articles:parsedData.articles,
    //         totalResults:parsedData.totalResults,
    //         loading:false});
    // }
    // handlePrevClick=async()=>{
    //     this.setState({page:this.state.page-1});
    //     this.updateNews()

    // console.log('Prev Clicked')

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data=await fetch(url)
    // let parsedData=await data.json()
    //     console.log(parsedData);

    // this.setState({
    //     page:this.state.page - 1,
    //     articles:parsedData.articles,
    //     loading:false
    //     })

    //     }
    // handleNextClick=async()=>{
    //     this.setState({page:this.state.page+1});
    //     this.updateNews()

    // console.log('Next Clicked')

    // let url = `https://newsapi.org
    // console.log('Next Clicked');
    // if(! this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    // }
    // else{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data=await fetch(url)
    // let parsedData=await data.json()

    // this.setState({
    //     page:this.state.page + 1,
    //     articles:parsedData.articles,
    //     loading:false
    //     })
    // }
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitalize(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
