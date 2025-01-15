import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NavBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = "b09f5402df214e0a93f6ca12794b74e9";
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles); // Set fetched articles
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div>
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">{category} News</span>
      </h2>
      <div className="container">
        <div className="row">
          {articles.map((news, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBoard;
