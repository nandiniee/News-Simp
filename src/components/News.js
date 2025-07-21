import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsComponents from "./NewsComponent";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const { country, category, pageSize, setProgress, api } = props;

  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [totalResults, setTotalResults] = React.useState(0);

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api}&pageSize=${pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(1);
    setProgress(100);
    document.title = `News Simp - ${
      category.charAt(0).toUpperCase() + category.slice(1)
    } Headlines`;
  };

  useEffect(() => {
    updateNews();
  }, []);

  //   handlePrevClick = async () => {
  //     this.setState({
  //       page: this.state.page - 1,
  //     });
  //     this.updateNews();
  //   };

  //   handleNextClick = async () => {
  //     this.setState({
  //       page: this.state.page + 1,
  //     });
  //     this.updateNews();
  //   };

  const fetchMoreData = async () => {
    setProgress(10);
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api}&pageSize=${pageSize}&page=${nextPage}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false);
    setProgress(50);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(nextPage);
    setProgress(100);
  };

  return (
    <>
      <h1
        className="my-3 text-center "
        style={{ marginTop: "85px", position: "relative", top: "7vh" }}
      >
        News Simp- Top {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
        Headlines
      </h1>

      <div className="main" style={{ marginTop: "3rem" }}>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          //To put endMessage and loader to the top. //
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
          scrollableTarget="scrollableDiv"
        >
          <div className="row g-3 my-3" style={{ margin: "10px 20px" }}>
            {articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <NewsComponents
                  title={
                    element.title
                      ? element.title.slice(0, 45) + "..."
                      : "No Title"
                  }
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
      {/* <div className="d-flex justify-content-between my-3 mx-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 9,
};

export default News;
