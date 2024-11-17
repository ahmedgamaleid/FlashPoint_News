
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const About = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("business");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const categories = ["business", "techcrunch", "wsj", "apple"];

  const fetchNews = async (category) => {
    setLoading(true);
    setError("");

    const cachedData = localStorage.getItem(`news_${category}`);
    if (cachedData) {
      setNewsArticles(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    try {
      let url = "";

      if (category === "business") {
        url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=829ea3fb19124ee7a7bb6ff81c43ff09";
      } else if (category === "techcrunch") {
        url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=829ea3fb19124ee7a7bb6ff81c43ff09";
      } else if (category === "wsj") {
        url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=829ea3fb19124ee7a7bb6ff81c43ff09";
      } else if (category === "apple") {
        url = "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=829ea3fb19124ee7a7bb6ff81c43ff09";
      }

      const { data } = await axios.get(url);

      if (data.status === "ok") {
        const articlesWithImages = data.articles.filter(article => article.title && article.urlToImage);
        setNewsArticles(articlesWithImages);
        localStorage.setItem(`news_${category}`, JSON.stringify(articlesWithImages));
      } else {
        throw new Error("No data received from API");
      }
    } catch (error) {
      setError(error.message || "Failed to fetch news. Please try again later.");
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(filter);
  }, [filter]);

  const containerVariants = {
    initial: { opacity: 1, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const newsItemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="about container">
      <div className="container fontstyle my-5">
        <div className="nameofdiv  my-5">
          <p className="fonthp  font-weight-bold">NEWS BY CATEGORIES</p>
          <h1 className=" font-weight-bold">Explore the Latest Stories by Category</h1>
          <p className="lead text-muted">Filter through various categories to find the news that matters to you</p>
        </div>

        <div className="d-flex justify-content-center my-3">
          {categories.map((category) => (
         <button
         key={category}
         onClick={() => {
           setFilter(category);
           setCurrentPage(1);
         }}
         className={`btn border-2 bg-dark text-white mx-2 ${filter === category ? "active btn-lg" : ""}`}  // Added 'btn-lg' for bigger button size
         style={filter === category ? { fontSize: "1.2rem", padding: "0.3rem 5.5rem" } : {}}
       >
         {category.charAt(0).toUpperCase() + category.slice(1)}
       </button>
       
          ))}
        </div>

        <motion.div
          className="row news mt-5 g-4 justify-content-center"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {loading ? (
            <div className="text-center">
              <p>Loading...</p>
            </div>
          ) : error ? (
            <div className="text-center text-danger">
              <p>{error}</p>
            </div>
          ) : currentArticles.length > 0 ? (
            currentArticles.map((article, index) => (
              <motion.div key={index} className="d-flex justify-content-center align-item-center col-lg-4 col-md-6 col-sm-12 news-item" variants={newsItemVariants}>
              <div className="news-content d-flex flex-column align-items-start"> {/* Align left here */}
                {article.urlToImage && (
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={article.urlToImage}
                      alt="News Thumbnail"
                      className="img-fluid mb-3 rounded-3"
                      style={{ width: "100%", height: "300px", objectFit: "cover" }} // Ensuring all images are the same size
                    />
                  </a>
                )}
               <h5 className="p-2 text-left font-weight-bold">{article.title}</h5>
              </div>
            </motion.div>
            
              //  <h5 className="p-2 text-left font-weight-bold">{article.title}</h5>
            ))
          ) : (
            <div className="text-center">
              <p>No articles available</p>
            </div>
          )}
        </motion.div>

        {/* Pagination Controls */}
        <div className="pagination d-flex justify-content-center my-4">
          {[...Array(Math.ceil(newsArticles.length / articlesPerPage)).keys()].map((num) => (
            <button
              key={num}
              onClick={() => paginate(num + 1)}
              className={`btn btn-outline-black border-2  mx-2 ${currentPage === num + 1 ? "active" : ""}`}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

