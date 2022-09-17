//import { ClosedCaptionDisabledSharp } from '@mui/icons-material';
import React, { useEffect,useState } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalize(props.category)}-Picture News`;
   
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


 

 
  const  updateNews = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
 setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

   
  
  useEffect(() => {
    updateNews(); 
}, [])



    // console.log('News Component Did Mount')
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=1&pageSize=${props.pageSize}`;
    // setState({loading:true});
    // let data=await fetch(url)
    // let parsedData=await data.json()
    //     console.log(parsedData);
    //     setState({articles:parsedData.articles,
    //         totalResults:parsedData.totalResults,
    //         loading:false});
    // }
    // handlePrevClick=async()=>{
    //     setState({page:state.page-1});
    //     updateNews()

    // console.log('Prev Clicked')

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=${state.page-1}&pageSize=${props.pageSize}`;
    // setState({loading:true});
    // let data=await fetch(url)
    // let parsedData=await data.json()
    //     console.log(parsedData);

    // setState({
    //     page:state.page - 1,
    //     articles:parsedData.articles,
    //     loading:false
    //     })

    //     }
    // handleNextClick=async()=>{
    //     setState({page:state.page+1});
    //     updateNews()

    // console.log('Next Clicked')

    // let url = `https://newsapi.org
    // console.log('Next Clicked');
    // if(! state.page+1 > Math.ceil(state.totalResults/props.pageSize)){

    // }
    // else{
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c39226d480ac4f7ebab08e04e6fbcabf&page=${state.page+1}&pageSize=${props.pageSize}`;
    // setState({loading:true});
    // let data=await fetch(url)
    // let parsedData=await data.json()

    // setState({
    //     page:state.page + 1,
    //     articles:parsedData.articles,
    //     loading:false
    //     })
    // }
    const handlePrevClick = async () => {
      setPage(page-1)
      updateNews();
  }

  const handleNextClick = async () => { 
      setPage(page+1)
      updateNews()
  }
  
    const fetchMoreData = async () => {   
      setPage(page+1) 
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    };

    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {capitalize(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll key="infinite-scroll"
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
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
News.defaultProps = {
  country: "in",
  pageSize: 15,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
