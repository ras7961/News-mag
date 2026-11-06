import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ search, searchOn, catagory }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${catagory}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(Array.isArray(data.articles) ? data.articles : []);
        setError("");
      })
      .catch(() => {
        setArticles([]);
        setError("Unable to load headlines right now. Please try again later.");
      });
  }, [catagory]);

  const normalizedSearch = search.trim().toLowerCase();
  const filteredNews = articles.filter((news) => {
    const title = (news.title || "").toLowerCase();
    const description = (news.description || "").toLowerCase();

    return !normalizedSearch || title.includes(normalizedSearch) || description.includes(normalizedSearch);
  });

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error && <p className="text-center text-danger">{error}</p>}
      {filteredNews.length === 0 && !error ? (
        <p className="text-center text-muted">No articles found for this search.</p>
      ) : null}
      {filteredNews.map((news, index) => (
        <NewsItem
          searchOn={searchOn}
          key={`${news.url || index}-${index}`}
          title={news.title}
          description={news.description}
          url={news.url}
          src={news.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
